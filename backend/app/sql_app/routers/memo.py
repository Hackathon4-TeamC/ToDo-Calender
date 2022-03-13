from typing import List
from fastapi import APIRouter

import sql_app.schemas.memo as memo_schema

router = APIRouter()

@router.get("/memo")
async def memo(memo: memo_schema.Create_memo):
    return [memo_schema.Memo(id=1, title="1つ目のメモ")]

@router.post("/memo")
async def create_memo():
    pass

@router.put("/memo/{memo_id}")
async def update_memo():
    pass

@router.delete("/memo/{memo_id}")
async def delete_memo():
    pass