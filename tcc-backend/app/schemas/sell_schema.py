from pydantic import BaseModel

class SellSchema(BaseModel):
  ticker: str
  name: str
  average_purchase_price: float
  sell_price: float
  amount: float
  date: str