from typing import List
from fastapi import APIRouter

import sql_app.schemas.memo as memo_schema

router = APIRouter()

@router.get("/memo", response_model=List[memo_schema.Memo])
async def list_tasks():
    return [memo_schema.Memo(id=1, title="1つ目のメモ")]

@router.post("/memo")
async def create_task():
    pass

@router.put("/memo/{memo_id}")
async def update_task():
    pass

@router.delete("/memo/{memo_id}")
async def delete_task():
    pass