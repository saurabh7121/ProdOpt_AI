from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "ProdOpt AI Backend is running"
    }


@app.get("/health")
def health_check():
    print("Frontend connection request received")

    return {
        "status": "ok",
        "message": "Frontend successfully connected to Python backend",
        "service": "ProdOpt AI Backend"
    }