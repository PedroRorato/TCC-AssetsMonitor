from fastapi import HTTPException
from sqlalchemy.orm import Session
# Project Imports
from ..models.sells import Sells
from ..schemas.sell_schema import SellSchema
from ..controllers.stock_controller import StockController


class SellController:
  # INDEX
  def get_sells(db_session: Session, ticker: str):
    query = db_session.query(Sells)
    # Ticker filter
    if ticker is not None:
      query = query.filter(Sells.ticker == ticker)
    return query.all()


  # CREATE
  def create_sell(db: Session, sell: SellSchema):
    # Update Stock
    stock = StockController.update_stock(db, sell.ticker, sell.sell_price, sell.amount, 'sell')
    # Calculate profits
    profitability = ((sell.sell_price/stock.average_purchase_price) - 1) * 100
    total_profit = (sell.sell_price - stock.average_purchase_price) * sell.amount
    # Create Sell
    new_sell = Sells(
      ticker=sell.ticker,
      name=sell.name,
      average_purchase_price=stock.average_purchase_price,
      sell_price=sell.sell_price,
      share_profitability=profitability,
      amount=sell.amount,
      total_profit=total_profit,
      date=sell.date,
    )
    db.add(new_sell)
    db.commit()
    db.refresh(new_sell)
    # Return data
    return new_sell


  # READ
  def get_sell(db: Session, sell_id: int):
    sell = db.query(Sells).filter(Sells.id == sell_id).first()
    # Check if exists
    if sell is None:
      raise HTTPException(
        status_code=404,
        detail=f"ID {sell_id} : Does not exist"
      )
    # Return data
    return sell


  # # UPDATE
  # def update_sell(db: Session, sell_id: int, sell: SellSchema):
  #   updated_sell = db.query(Sells).filter(Sells.id == sell_id).first()
  #   # Check if exists
  #   if updated_sell is None:
  #     raise HTTPException(
  #       status_code=404,
  #       detail=f"ID {sell_id} : Does not exist"
  #     )
  #   # Update fields
  #   updated_sell.ticker=sell.ticker,
  #   updated_sell.average_purchase_price=sell.average_purchase_price,
  #   updated_sell.sell_price=sell.sell_price,
  #   updated_sell.share_profitability=sell.share_profitability,
  #   updated_sell.amount=sell.amount,
  #   updated_sell.total_profit=sell.total_profit,
  #   updated_selldate=sell.date,
  #   # Save updated fields
  #   db.add(updated_sell)
  #   db.commit()
  #   # Return data
  #   return sell


  # # DELETE
  # def delete_sell(db: Session, sell_id: int):
  #   sell = db.query(Sells).filter(Sells.id == sell_id).first()
  #   # Check if exists
  #   if sell is None:
  #     raise HTTPException(
  #       status_code=404,
  #       detail=f"ID {sell_id} : Does not exist"
  #     )
  #   # Update Stock
  #   # TODO: update stock average price and amount
  #   # Delete item
  #   db.query(Sells).filter(Sells.id == sell_id).delete()
  #   db.commit()
  #   # Return message
  #   return "Sell register successfully deleted"
