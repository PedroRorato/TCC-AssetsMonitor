from fastapi import HTTPException
from sqlalchemy.orm import Session
# Project Imports
from ..models.purchases import Purchases
from ..schemas.purchase_schema import PurchaseSchema
from ..controllers.stock_controller import StockController


class PurchaseController:
  # INDEX
  def get_purchases(db_session: Session, ticker: str):
    query = db_session.query(Purchases)
    # Ticker filter
    if ticker is not None:
      query = query.filter(Purchases.ticker == ticker)
    return query.all()


  # CREATE
  def create_purchase(db: Session, purchase: PurchaseSchema):
    # Check Stock
    stock = StockController.get_stock_by_ticker(db, purchase.ticker)
    if stock is None:
      StockController.create_stock(db, purchase.ticker, purchase.name, purchase.price, purchase.amount)
    else:
      StockController.update_stock(db, purchase.ticker, purchase.price, purchase.amount, 'purchase')
    # Create Purchase
    new_purchase = Purchases(
      ticker=purchase.ticker,
      name=purchase.name,
      price=purchase.price,
      amount=purchase.amount,
      total=purchase.total,
      date=purchase.date,
    )
    db.add(new_purchase)
    db.commit()
    db.refresh(new_purchase)
    # Return data
    return new_purchase


  # READ
  def get_purchase(db: Session, purchase_id: int):
    purchase = db.query(Purchases).filter(Purchases.id == purchase_id).first()
    # Check if exists
    if purchase is None:
      raise HTTPException(
        status_code=404,
        detail=f"ID {purchase_id} : Does not exist"
      )
    # Return data
    return purchase


  # # UPDATE
  # def update_purchase(db: Session, purchase_id: int, purchase: PurchaseSchema):
  #   updated_purchase = db.query(Purchases).filter(Purchases.id == purchase_id).first()
  #   # Check if exists
  #   if updated_purchase is None:
  #     raise HTTPException(
  #       status_code=404,
  #       detail=f"ID {purchase_id} : Does not exist"
  #     )
  #   # Update fields
  #   updated_purchase.ticker = purchase.ticker
  #   updated_purchase.price = purchase.price
  #   updated_purchase.amount = purchase.amount
  #   updated_purchase.total = purchase.total
  #   updated_purchase.date = purchase.date
  #   # Save updated fields
  #   db.add(updated_purchase)
  #   db.commit()
  #   # Return data
  #   return purchase


  # # DELETE
  # def delete_purchase(db: Session, purchase_id: int):
  #   purchase = db.query(Purchases).filter(Purchases.id == purchase_id).first()
  #   # Check if exists
  #   if purchase is None:
  #     raise HTTPException(
  #       status_code=404,
  #       detail=f"ID {purchase_id} : Does not exist"
  #     )
  #   # Update Stock
  #   # TODO: update stock average price and amount
  #   # Delete item
  #   db.query(Purchases).filter(Purchases.id == purchase_id).delete()
  #   db.commit()
  #   # Return message
  #   return "Purchase register successfully deleted"

