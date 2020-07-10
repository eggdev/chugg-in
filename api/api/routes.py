from api.Games.resources import GamesAPI


def initialize_routes(api):
    api.add_resource(GamesAPI, "/api/games")
