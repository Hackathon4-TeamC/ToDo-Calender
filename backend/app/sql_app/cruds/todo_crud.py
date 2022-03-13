from operator import and_
from sqlalchemy.orm import Session
from sql_app.schemas import todo_schema
from sql_app.models import models
import datetime
import locale


# 時間を日本語設定にする
locale.setlocale(locale.LC_ALL, "ja_JP.UTF-8")


def get_todos_list(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Todo).offset(skip).limit(limit).all()


def create_todo(db: Session, todo: todo_schema.TodoCreate):
    """受け取った開始日,終了日から学習する期間を算出、そこから曜日を見て実際に学習する日だけをDBに保存
    [args] db , todo : TodoCreate
    [return] string
    """
    period = todo.end_date - todo.start_date
    repeat_times = period.days + 1

    for length in range(repeat_times):
        excution_date = todo.start_date + datetime.timedelta(days=length)
        print(type(excution_date))
        if excution_date.strftime("%a") in todo.learning_weekday:
            input_db = models.Todo(
                user_id=todo.user_id,
                todo_task=todo.todo_task,
                execution_date=excution_date,
                learning_time=todo.learning_time,
                is_done=False,
            )
            db.add(input_db)

    db.commit()
    db.close
    return "ok! input todo data"


def get_daily_todos(request_date: datetime.date, user_id: int, db: Session):
    """指定された日時,user_idから学習記録を返却
    [args] request_date,user_id,db
    [return] todo_schema.Response_Todo
    """

    response_data = (
        db.query(models.Todo)
        .filter(
            and_(
                models.Todo.user_id == user_id,
                models.Todo.execution_date == request_date,
            )
        )
        .all()
    )
    return response_data
