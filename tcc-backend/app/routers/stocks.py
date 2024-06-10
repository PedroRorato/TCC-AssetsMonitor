from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
# Project Imports
from ..core.database import get_db
from ..controllers.stock_controller import StockController
# from app.schemas.stock_schema import StockSchema


# Start Router
router = APIRouter()

# Index
@router.get("/stocks")
def get_stocks(db: Session = Depends(get_db)):
  return StockController.get_stocks(db)

# Read
@router.get("/stocks/{ticker}")
def get_stock(ticker: str, db: Session = Depends(get_db)):
  return StockController.get_stock(db, ticker)


# Magic Formula
@router.get("/magic-formula")
def get_magic_formula():
  return StockController.get_magic_formula()