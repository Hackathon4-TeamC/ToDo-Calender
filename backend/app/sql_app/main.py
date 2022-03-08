from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


from sql_app.routers import user, todo


app = FastAPI()

# ルーターの設定
app.include_router(user.router)
app.include_router(todo.router)

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
