from sqlalchemy import Column, ForeignKey, Integer, String, DATETIME, Boolean
from .database import Base


# Create
class User(Base):
    __tablename__ = 'users'
    user_id = Column(Integer, primary_key=True, autoincrement=True)
    user_name = Column(String(30))
    email = Column(String(30))
    password = Column(String(30))
    joined_date = Column(DATETIME)
    is_superuser = Column(Boolean)
    is_staff = Column(Boolean)
    is_deleted = Column(Boolean)



