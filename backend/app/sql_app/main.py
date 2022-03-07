from fastapi import FastAPI


from sql_app.routers import user, todo


app = FastAPI()

# ルーターの設定
app.include_router(user.router)
app.include_router(todo.router)


@app.get("/")
async def root():
    return {"message": "todo-calendar"}
