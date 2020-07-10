from database.db import db


class Games(db.Document):
    name = db.StringField(required=True)
