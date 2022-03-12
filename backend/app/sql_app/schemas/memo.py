from typing import Optional
from pydantic import BaseModel, Field

class Memo(BaseModel):
    id: int
    memo_text: str
    # written_date : datetime.date
