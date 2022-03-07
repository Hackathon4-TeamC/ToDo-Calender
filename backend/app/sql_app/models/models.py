from sqlalchemy import Column, Integer, String, DATETIME, Boolean
from sqlalchemy.ext.declarative import declarative_base

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

