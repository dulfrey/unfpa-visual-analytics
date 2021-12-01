from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_httpauth import HTTPBasicAuth
import utils


app = Flask(__name__, static_folder="react-dashboard/build", static_url_path="/")
CORS(app, resources={r"/*": {"origins": "*"}})
app.config["CORS_HEADERS"] = "Content-Type"
auth = HTTPBasicAuth()
users = {"unfpa_dev": "vpaD6tzHR9"}


@auth.verify_password
def verify_password(username, password):
    if username in users and \
            (users.get(username) == password):
        return username


@app.route("/")
def serve():
    return app.send_static_file("index.html")


@app.route("/filter_years/")
@auth.login_required
def get_filtered_years():
    variables = request.args.get("variables").split(",")
    variables_dict = {"data": utils.filtro_dar_anios(variables)}
    return jsonify(variables_dict)


@app.route("/filter_cities/")
@auth.login_required
def get_filtered_cities():
    variables = request.args.get("variables").split(",")
    variables_dict = {"data": utils.filtro_dar_municipios(variables)}
    return jsonify(variables_dict)


@app.route("/filter_years_from_cities_variables/")
@auth.login_required
def get_filtered_years_from_cities_variables():
    variables = request.args.get("variables").split(",")
    cities = request.args.get("cities").split(",")
    variables_dict = {"data": utils.filtro_dar_anios_indicadoresymunicipios(variables, cities)}
    return jsonify(variables_dict)


@app.route("/variables/")
@auth.login_required
def get_variables():
    return jsonify({"data": utils.dar_indicadores()})


@app.route("/cities/")
@auth.login_required
def get_cities():
    return jsonify({"data": utils.dar_municipios()})


@app.route("/counties/")
@auth.login_required
def get_counties():
    return jsonify({"data": utils.dar_departamentos()})


@app.route("/county-cities/")
@auth.login_required
def get_county_cities():
    county = request.args.get("counties").split(",")
    return jsonify({"data": utils.dar_municipios_pertenecientes_departamento(county)})


@app.route("/data/")
@auth.login_required
def get_data():
    variables = request.args.get("variables").split(",")
    cities = request.args.get("cities").split(",")
    years = request.args.get("years").split(",")
    years = list(map(int, years))
    return jsonify({"data": utils.dar_datos(variables, cities, years)})
