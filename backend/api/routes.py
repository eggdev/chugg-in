from api.Games.resources import GamesAPI
from api.Games.resources import SingleGame


def initialize_routes(api):
    api.add_resource(GamesAPI, "/api/games")
    api.add_resource(SingleGame, "/api/games/<id>")
