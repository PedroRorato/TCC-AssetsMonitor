from sqlalchemy import Column, Float, Integer, String

from ..core.database import Base

class Stocks(Base):
  __tablename__='stocks'

  id = Column(Integer, primary_key=True, index=True)
  ticker = Column(String, index=True)
  name = Column(String)
  average_purchase_price = Column(Float)
  amount = Column(Float)
