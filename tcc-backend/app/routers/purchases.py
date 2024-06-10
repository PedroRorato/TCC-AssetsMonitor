from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import Optional
# Project Imports
from ..core.database import get_db
from ..controllers.purchase_controller import PurchaseController
from app.schemas.purchase_schema import PurchaseSchema


# Start Router
router = APIRouter()

# Index
@router.get("/purchases")
def get_purchases(ticker: Optional[str] = None, db: Session = Depends(get_db)):
  return PurchaseController.get_purchases(db, ticker)

# Create
@router.post("/purchases")
def create_purchase(purchase: PurchaseSchema, db: Session = Depends(get_db)):
  return PurchaseController.create_purchase(db, purchase)

# Read
@router.get("/purchases/{purchase_id}")
def get_purchase(purchase_id: int, db: Session = Depends(get_db)):
  return PurchaseController.get_purchase(db, purchase_id)

# # Update
# @router.put("/purchases/{purchase_id}")
# def update_purchase(purchase_id: int, purchase: PurchaseSchema, db: Session = Depends(get_db)):
#   return PurchaseController.update_purchase(db, purchase_id, purchase)

# # Delete
# @router.delete("/purchases/{purchase_id}")
# def delete_purchase(purchase_id: int, db: Session = Depends(get_db)):
#   return PurchaseController.delete_purchase(db, purchase_id)

