import os
from pymongo import MongoClient
from pprint import pprint
from dotenv import load_dotenv
load_dotenv()

DB_URL = os.getenv("MONGODB_URL")

client = MongoClient(DB_URL)
db = client.chuggin
