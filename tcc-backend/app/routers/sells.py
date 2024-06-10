from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import Optional
# Project Imports
from ..core.database import get_db
from ..controllers.sell_controller import SellController
from app.schemas.sell_schema import SellSchema


# Start Router
router = APIRouter()

# Index
@router.get("/sells")
def get_sells(ticker: Optional[str] = None, db: Session = Depends(get_db)):
  return SellController.get_sells(db, ticker)

# Create
@router.post("/sells")
def create_sell(sell: SellSchema, db: Session = Depends(get_db)):
  return SellController.create_sell(db, sell)

# # Read
# @router.get("/sells/{sell_id}")
# def get_sell(sell_id: int, db: Session = Depends(get_db)):
#   return SellController.get_sell(db, sell_id)

# # Update
# @router.put("/sells/{sell_id}")
# def update_sell(sell_id: int, sell: SellSchema, db: Session = Depends(get_db)):
#   return SellController.update_sell(db, sell_id, sell)

# # Delete
# @router.delete("/sells/{sell_id}")
# def delete_sell(sell_id: int, db: Session = Depends(get_db)):
#   return SellController.delete_sell(db, sell_id)
