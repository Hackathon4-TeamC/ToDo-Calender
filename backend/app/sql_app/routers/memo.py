from fastapi import APIRouter

router = APIRouter()

@router.get("/memo")
async def list_tasks():
    pass

@router.post("/memo")
async def create_task():
    pass

@router.put("/memo/{memo_id}")
async def update_task():
    pass

@router.delete("/memo/{memo_id}")
async def delete_task():
    pass