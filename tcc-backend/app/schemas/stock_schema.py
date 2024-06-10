# Validate data shape for API payload
from pydantic import BaseModel

class StockSchema(BaseModel):
  ticker: str
  name: str
  average_purchase_price: float
  amount: float
