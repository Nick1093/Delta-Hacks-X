from fastapi import FastAPI, File, UploadFile
from pptx import Presentation
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Set up CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

# helper method to extract text from each slide for the pptx
def extract_text_from_pptx(pptx_file):
    prs = Presentation(pptx_file)
    slides_content = []  # Array to hold the content of each slide

    for slide in prs.slides:
        slide_text = ""  # String to hold content of each slide
        for shape in slide.shapes:
            if hasattr(shape, "text"):
                slide_text += shape.text + "\n"  # Append text from each shape to the slide text

        slides_content.append(slide_text.strip())  # Add the slide's content to the array

    return slides_content

@app.post("/upload_pptx/")
async def upload_pptx(uploaded_files: UploadFile):
    files = await uploaded_files.read()

    try:
        # content of the reels
        reels_content = []

        for i in range(len(files)):
            with open("temp.pptx", "wb") as f:
                f.write(files[i].file.read())

            # Extract text from the PowerPoint file
            slides_content = extract_text_from_pptx("temp.pptx")

            reels_content.append(slides_content)

        #Return the extracted text as a response
        return {"success": True, "slides_content": reels_content}
    except Exception as e:
        return {"success": False, "error_message": str(e)}