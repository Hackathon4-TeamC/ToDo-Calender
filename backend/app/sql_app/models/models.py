from sqlalchemy import Column, Integer, String, DateTime, Boolean, DATETIME
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

# modelで使用する
Base = declarative_base()


# Create
class User(Base):
    __tablename__ = "users"
    user_id = Column(Integer, primary_key=True, autoincrement=True)
    user_name = Column(String(255))
    email = Column(String(255))
    password = Column(String(255))
    joined_date = Column(DATETIME)
    is_deleted = Column(Boolean)


class Todo(Base):
    __tablename__ = "todos"
    todo_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, nullable=False)
    todo_task = Column(String(30))
    learning_date = Column(DATETIME)
    learning_time = Column(Integer)
    is_done = Column(Boolean)


