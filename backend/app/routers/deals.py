from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_deals():
    return [{"id": 1, "name": "Sample Deal", "stage": "Sourcing"}]
