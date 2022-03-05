from fastapi import APIRouter, Depends
from typing import List
from sql_app.schemas import user_schema
from sqlalchemy.orm import Session
from sql_app.cruds import user_crud
from sql_app.database import SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


router = APIRouter()


@router.get("/users", response_model=List[user_schema.User])
async def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = user_crud.get_users(db, skip=skip, limit=limit)
    return users


@router.post("/users", response_model=user_schema.User)
async def create_user(user: user_schema.UserCreate, db: Session = Depends(get_db)):
    return user_crud.create_user(db=db, user=user)
