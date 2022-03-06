import datetime
from pydantic import BaseModel
from typing import Optional


class UserCreate(BaseModel):
    user_name: str
    email: str
    password: str
    joined_date: datetime.date
    is_deleted: bool


class User(UserCreate):
    user_id: int

    class Config:
        orm_mode = True


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None
