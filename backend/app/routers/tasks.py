from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_tasks():
    return [{"id": 1, "title": "Call founder", "status": "open"}]
