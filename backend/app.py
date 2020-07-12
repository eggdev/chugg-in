from flask import Flask, make_response
from database.config import DB_URI
from database.db import initialize_app
from flask_restful import Api
from api.routes import initialize_routes
from flask_cors import CORS

app = Flask(__name__)
app.config["MONGODB_HOST"] = DB_URI

api = Api(app)

initialize_app(app)
initialize_routes(api)
CORS(app, resources={
    r"/api/*": {
        "origins": "*"
    }})

if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")
