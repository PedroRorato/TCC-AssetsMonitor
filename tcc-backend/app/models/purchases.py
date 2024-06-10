from sqlalchemy import Column, Date, Float, Integer, String

from ..core.database import Base

class Purchases(Base):
  __tablename__='purchases'

  id = Column(Integer, primary_key=True, index=True)
  ticker = Column(String, index=True)
  name = Column(String)
  price = Column(Float)
  amount = Column(Float)
  total = Column(Float)
  date = Column(Date)