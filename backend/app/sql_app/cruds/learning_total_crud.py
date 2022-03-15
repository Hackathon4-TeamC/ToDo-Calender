from sqlalchemy.orm import Session
from sql_app.models import models


def total_time(user_id: int, db: Session):
    total_time = 0
    fetch_from_db = db.query(models.Todo).filter(models.Todo.user_id == user_id).all()

    for time in fetch_from_db:
        time_str = str(time.learning_time)
        hour = int(time_str[0:2]) * 60 * 60
        min = int(time_str[3:5]) * 60
        sec = int(time_str[6:8])
        total_time = total_time + hour + min + sec
    return {"total_sec": total_time}
