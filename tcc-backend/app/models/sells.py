from sqlalchemy import Column, Date, Float, Integer, String

from ..core.database import Base

class Sells(Base):
  __tablename__='sells'

  id = Column(Integer, primary_key=True, index=True)
  ticker = Column(String, index=True)
  name = Column(String)
  average_purchase_price = Column(Float)
  sell_price = Column(Float)
  share_profitability = Column(Float)
  amount = Column(Float)
  total_profit = Column(Float)
  date = Column(Date)