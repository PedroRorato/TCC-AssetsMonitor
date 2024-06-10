import json
from fastapi import HTTPException
from sqlalchemy.orm import Session
# Project Imports
from ..models.purchases import Purchases
from ..models.sells import Sells
from ..models.stocks import Stocks


class StockController:

  # INDEX
  def get_stocks(db_session: Session):
    return db_session.query(Stocks).filter(Stocks.amount > 0).all()


  # READ
  def get_stock(db: Session, ticker: str):
    stock = StockController.get_stock_by_ticker(db, ticker)
    # Check if exists
    if stock is None:
      raise HTTPException(
        status_code=404,
        detail=f"Ticker {ticker} : Does not exist"
      )
    metrics = StockController.get_metrics_by_ticker(ticker)[0]
    purchases = db.query(Purchases).filter(Purchases.ticker == ticker).all()
    sells = db.query(Sells).filter(Sells.ticker == ticker).all()
    # Return data
    return {'stock': stock, 'metrics': metrics, 'purchases': purchases, 'sells': sells}


  # GET BY TICKER
  def get_stock_by_ticker(db: Session, ticker: str):
    stock = db.query(Stocks).filter(Stocks.ticker == ticker).first()
    # Return data
    return stock


  # GET METRICS TICKER
  def get_metrics_by_ticker(ticker: str):
    file = open('app/store/stock_metrics.json', 'r')
    data = json.load(file)
    stock_metrics = [stock for stock in data if stock['Papel'] == ticker]
    # Return data
    return stock_metrics


  # CREATE STOCK
  def create_stock(db: Session, ticker: str, name: str, price: float, amount: float):
    new_stock = Stocks(
      ticker=ticker,
      name=name,
      average_purchase_price=price,
      amount=amount,
    )
    db.add(new_stock)
    db.commit()
    # Return data
    return new_stock


  # UPDATE
  def update_stock(db: Session, ticker: str, price: float, amount: float, kind: str):
    updated_stock = StockController.get_stock_by_ticker(db, ticker)
    # Check if exists
    if updated_stock is None:
      raise HTTPException(
        status_code=404,
        detail=f"Ticker {ticker} : Does not exist"
      )
    # Recalculate
    if kind == 'purchase':
      curr_total = updated_stock.average_purchase_price * updated_stock.amount
      purchase_total = price*amount
      new_total = curr_total + purchase_total
      new_amount = updated_stock.amount + amount
      average_purchase_price = new_total/new_amount
      updated_stock.average_purchase_price= average_purchase_price
    elif kind == 'sell':
      new_amount = updated_stock.amount - amount
    # elif kind == 'recalculate': # TODO: Recalculate Average price through iteration
    else:
      raise HTTPException(
        status_code=500,
        detail=f"Error recalculating average stock price"
      )
    updated_stock.amount= new_amount,
    # Save updated fields
    db.add(updated_stock)
    db.commit()
    # Return data
    return updated_stock


  # MAGIC FORMULA
  def get_magic_formula():
    file = open('app/store/magic_formula.json', 'r')
    data = json.load(file)
    # Return data
    return data
