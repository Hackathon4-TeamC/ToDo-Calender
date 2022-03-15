from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session


from sql_app.database import get_db
from sql_app.cruds import learning_total_crud
from sql_app.schemas import learning_total_schema


router = APIRouter()


@router.get("/total/all/{user_id}", response_model=learning_total_schema.TotalSec)
async def total_time(user_id: int, db: Session = Depends(get_db)):
    return learning_total_crud.total_time(user_id, db)
