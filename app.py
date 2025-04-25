from flask import Flask, render_template, request
from api import GoogleRouteApi, RoutePolyline


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("base.html")  # HTML file in the templates folder


@app.route("/index", methods=["GET", "POST"])
def index():
    _route = None
    _polyline = None
    if request.method == "GET":
        # r = GoogleRouteApi(origin, destination, travel_mode)
        _route = GoogleRouteApi()
        _polyline = RoutePolyline()
        # print(_polyline)
    return render_template("index.html", result=_route, polyline=_polyline)


if __name__ == "__main__":
    app.run(debug=True)
