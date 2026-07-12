import os
import shutil

from fastapi import APIRouter, File, UploadFile

from app.services.disease_service import detect_disease

router = APIRouter(
    prefix="/disease",
    tags=["Disease Detection"]
)

UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/detect")
async def detect(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = detect_disease(file_path)

    return {
        "analysis": result
    }