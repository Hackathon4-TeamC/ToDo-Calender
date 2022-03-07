from sqlalchemy.orm import Session
from sql_app.schemas import todo_schema
from sql_app.models import models
from typing import List
import datetime

# from fastapi import HTTPException


def get_todos(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Todo).offset(skip).limit(limit).all()


def create_todo(db: Session, todo: todo_schema.Todo):
    #学習期間内で何日後にtaskがあるかをlistで取得
    days_length = (todo.end_date - todo.start_date).days + 1
    length_to_learing_day = []
    for i in range(days_length):
        if todo.start_date.weekday() in todo.learning_weekday:
            length_to_learing_day.append(i)

    for length in length_to_learing_day:
        db_todo = models.Todo(
            user_id=todo.user_id,
            todo_task=todo.todo_task,
            learning_date='2022-02-02',
            learning_time=todo.learning_time,
            is_done=0,
        )
        db.add(db_todo)
    db.commit()
    db.close
    return 'db_todo'
