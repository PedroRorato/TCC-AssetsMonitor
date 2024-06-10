# Connect to DB
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

#  DB - user - password - url:port - database
URL_DATABASE = 'postgresql://postgres:12345@localhost:5432/tcc2024'

# Creates DB Object
engine = create_engine(URL_DATABASE)

# Creates Session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Maps class to database
Base = declarative_base()

# Get DB
def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()