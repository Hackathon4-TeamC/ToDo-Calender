from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List


from sql_app.cruds import todo_crud
from sql_app.schemas import todo_schema
from sql_app.database import get_db


router = APIRouter()


@router.get("/todos", response_model=List[todo_schema.ResponseTodo])
async def read_todos(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    todos = todo_crud.get_todos(db, skip=skip, limit=limit)
    print(type(todos[0].todo_id))
    return todos


@router.post("/todos")
async def create_todo(todo: todo_schema.TodoCreate, db: Session = Depends(get_db)):
    return todo_crud.create_todo(db=db, todo=todo)

