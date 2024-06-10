import pandas as pd
import requests
from .magic_formula_job import get_magic_formula_ranking


# Stock Metrics
def get_metrics():
  # Scraping
  url = 'https://fundamentus.com.br/resultado.php'
  header = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"
  }
  r = requests.get(url, headers=header)
  # Convert to DataFrame
  df = pd.read_html(r.text, decimal=',', thousands='.')[0]
  # Create JSON file
  df.to_json(r'app/store/stock_metrics.json', orient='records')
  get_magic_formula_ranking()

