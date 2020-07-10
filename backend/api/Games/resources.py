from flask import make_response
from database.Games.models import Games
from flask_restful import Resource


class GamesAPI(Resource):
    def get(self):
        games = Games.objects()
        return make_response({"games": games}, 200)
