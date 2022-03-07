from fastapi import APIRouter, Depends
from typing import List
from sqlalchemy.orm import Session


from sql_app.cruds import todo_crud
from sql_app.schemas import todo_schema
from sql_app.database import get_db


router = APIRouter()


@router.get("/todos", response_model=List[todo_schema.Todo])
async def read_todos(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    todos = todo_crud.get_todos(db, skip=skip, limit=limit)
    return todos


@router.post("/todos", response_model=todo_schema.Todo)
async def create_todo(todo: todo_schema.TodoCreate, db: Session = Depends(get_db)):
    return todo_crud.create_todo(db=db, todo=todo)
