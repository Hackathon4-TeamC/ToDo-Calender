from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from sql_app.routers import todo
from sql_app.routers import user
from sql_app.routers import learning_total


app = FastAPI()

# ルーターの設定
app.include_router(user.router)
app.include_router(todo.router)
app.include_router(learning_total.router)

# corsの設定
origins = [
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "todo-calendar"}
