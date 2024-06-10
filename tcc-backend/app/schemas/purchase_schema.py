# Validate data shape for API payload
from pydantic import BaseModel

class PurchaseSchema(BaseModel):
  ticker: str
  name: str
  price: float
  amount: float
  total: float
  date: str