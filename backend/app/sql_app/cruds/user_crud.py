from sqlalchemy.orm import Session
from passlib.context import CryptContext


from sql_app.schemas import user_schema
from sql_app.models import models

# from fastapi import HTTPException
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def get_password_hash(password):
    return pwd_context.hash(password)


def create_user(db: Session, user: user_schema.User):
    db_user = models.User(
        user_name=user.user_name,
        email=user.email,
        password=get_password_hash(user.password),
        joined_date=user.joined_date,
        is_deleted=False,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
