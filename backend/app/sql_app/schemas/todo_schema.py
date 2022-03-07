import datetime
from typing import List
from pydantic import BaseModel

class TodoCreate(BaseModel):
  user_id: int
  todo_task: str
  start_date: datetime.date
  end_date: datetime.date
  learning_weekday: List[int] = []
  learning_time: int

class Todo(TodoCreate):
    todo_id: int

    class Config:
        orm_mode = True
