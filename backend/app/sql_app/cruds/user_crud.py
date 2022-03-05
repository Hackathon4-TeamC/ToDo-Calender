from sqlalchemy.orm import Session
from sql_app.schemas import user_schema
from sql_app.models import models

# from fastapi import HTTPException


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: user_schema.User):
    db_user = models.User(
        user_name=user.user_name,
        email=user.email,
        password=user.password,
        joined_date=user.joined_date,
        is_superuser=user.is_superuser,
        is_staff=user.is_staff,
        is_deleted=user.is_deleted,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
