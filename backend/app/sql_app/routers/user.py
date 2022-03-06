from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
from datetime import datetime, timedelta
from typing import Optional

from sql_app.cruds import user_crud
from sql_app.schemas import user_schema

from jose import jwt

from sql_app.models import models
from sql_app.database import get_db


router = APIRouter()

# sample
SECRET_KEY = "df2341aa72b655d5e0c118da58afc0f044eb39fc259cb5ee88a9ac42989419a6"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


@router.get("/users", response_model=List[user_schema.User])
async def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = user_crud.get_users(db, skip=skip, limit=limit)
    return users


@router.post("/users", response_model=user_schema.User)
async def create_user(user: user_schema.UserCreate, db: Session = Depends(get_db)):
    return user_crud.create_user(db=db, user=user)


# 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
def get_user(db, username: str) -> user_schema.User:
    # dbからユーザーのデータを取得
    return db.query(models.User).filter(models.User.email == username).first()


def verify_password(plain_password, hashed_password):
    # dbのパスワードとハッシュ化しているパスワードを検証
    return pwd_context.verify(plain_password, hashed_password)


def authenticate_user(db, username: str, password: str):
    """ユーザーの認証
    ユーザーがdbに登録されているか
    パスワードが正しいか
    """
    user = get_user(db, username)
    if not user:
        return False
    if not verify_password(password, user.password):
        return False
    return user


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    """jwtを作成、返却
    引数 ユーザーデータ,jwtの有効期限
    返却 jwt
    """
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encode_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encode_jwt


@router.post("/token")
async def signin(
    form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)
):
    """リクエストから来たユーザー情報を検証して、返却
    引数    from_data.username (実態はemail)
           from_data.password
    返却値  DBのユーザー情報
    """
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.user_name}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/user/me")
async def read_user_me(token: str = Depends(oauth2_scheme)):
    return {"the_token": token}
