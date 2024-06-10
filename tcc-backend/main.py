from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# Project Imports
from app.core.database import engine, Base
from app.routers import purchases, sells, stocks
from app.tasks.scheduler import scheduler

# Create databases
Base.metadata.create_all(bind=engine)


# Create API
app = FastAPI()


# CORS Fix
origins = ["http://127.0.0.1:5173", "http://localhost:5173"]
# Middleware
app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)


# ROUTES
app.include_router(purchases.router)
app.include_router(sells.router)
app.include_router(stocks.router)
# Root
@app.get("/")
def home():
  return "API running"

