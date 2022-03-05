from fastapi import FastAPI


from sql_app.routers import user


app = FastAPI()

# ルーターの設定
app.include_router(user.router)


@app.get("/")
async def root():
    return {"message": "todo-calendar"}
