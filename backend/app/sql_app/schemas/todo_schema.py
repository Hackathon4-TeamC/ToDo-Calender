import datetime
from typing import List
from pydantic import BaseModel


class TodoCreate(BaseModel):
    user_id: int
    todo_task: str
    start_date: datetime.date
    end_date: datetime.date
    learning_weekday: List[str]
    learning_time: int


class ResponseTodo(BaseModel):
    user_id: int
    todo_task: str
    execution_date: datetime.datetime
    learning_time: int
    is_done: bool
    todo_id: int

    class Config:
        orm_mode = True


class Todo(TodoCreate):
    todo_id: int

    class Config:
        orm_mode = True
