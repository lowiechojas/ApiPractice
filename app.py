from flask import Flask, render_template, request
from api import GoogleRouteApi

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("base.html")  # HTML file in the templates folder


@app.route("/index", methods=["GET", "POST"])
def index():
    r = None
    if request.method == "POST":
        # r = GoogleRouteApi(origin, destination, travel_mode)
        r = GoogleRouteApi()
        print(r)
    return render_template("index.html", result=r)


if __name__ == "__main__":
    app.run(debug=True)
