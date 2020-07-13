from flask import make_response, request
from database.Games.models import Games
from flask_restful import Resource


class GamesAPI(Resource):
    def get(self):
        limit = request.args.get("limit")
        games = Games.objects[:int(limit)]
        return make_response({"games": games}, 200)


class SingleGame(Resource):
    def get(self, id):
        game = Games.objects.get(id=id)
        return make_response({"game": game}, 200)
