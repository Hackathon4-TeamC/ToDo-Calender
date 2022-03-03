from  typing import List
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal,ENGINE


models.Base.metadata.create_all(bind=ENGINE)

app = FastAPI()



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get('/')
async def root():
    return {'message': 'todo-calendar'}



@app.get('/users', response_model=List[schemas.User])
async def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.post('/users', response_model=schemas.User)
async def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return crud.create_user(db=db, user=user)