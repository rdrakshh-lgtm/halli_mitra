import os
import shutil

from fastapi import APIRouter, File, UploadFile

router = APIRouter(
    prefix="/upload",
    tags=["Image Upload"]
)

UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/image")
async def upload_image(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "message": "Image uploaded successfully",
        "filename": file.filename,
        "path": file_path
    }