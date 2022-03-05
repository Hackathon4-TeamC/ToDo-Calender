import datetime
from pydantic import BaseModel


class UserCreate(BaseModel):
    user_name: str
    email: str
    password: str
    joined_date: datetime.date
    is_superuser: bool
    is_staff: bool
    is_deleted: bool


class User(UserCreate):
    user_id: int

    class Config:
        orm_mode = True
