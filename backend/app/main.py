from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import deals, tasks

app = FastAPI(title="Mini-DealCloud API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","http://localhost:5174","http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}

app.include_router(deals.router, prefix="/deals", tags=["deals"])
app.include_router(tasks.router, prefix="/tasks", tags=["tasks"])
