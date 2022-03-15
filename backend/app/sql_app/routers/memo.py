from typing import Optional
from fastapi import APIRouter

import sql_app.schemas.memo as memo_schema

router = APIRouter()

@router.get("/memo")
async def memo(memo_id: int, memo: Optional[str] = None):
    return {
        "memo_id": memo_id,
        "memo": memo
    }

@router.post("/memo")
async def create_memo(memo: memo_schema.Create_memo):
    pass

@router.put("/memo/{memo_id}")
async def update_memo():
    pass

@router.delete("/memo/{memo_id}")
async def delete_memo():
    pass