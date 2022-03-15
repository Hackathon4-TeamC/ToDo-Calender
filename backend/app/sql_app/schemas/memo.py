import datetime
from pydantic import BaseModel
from typing import Optional

class memo():
    memo_id: int
    memo: Optional[str] = None

class Create_memo(BaseModel):
    memo_text: str
    ritten_date : datetime.date
