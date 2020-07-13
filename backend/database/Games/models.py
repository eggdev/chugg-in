from database.db import db


class Games(db.Document):
    name = db.StringField(required=True)
    type = db.StringField(required=True)
    description = db.StringField(required=True)
    creator = db.StringField(required=True)
    equipment_cat = db.StringField(required=True)
    min_players = db.StringField(required=True)
    max_players = db.StringField(required=True)
    static_rule = db.StringField(required=True)
