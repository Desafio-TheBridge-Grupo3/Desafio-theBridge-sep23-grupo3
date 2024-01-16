import json
from flask import Flask, request, jsonify
from flask_limiter import Limiter
from flask_cors import CORS, cross_origin
from cerberus import Validator
import requests
from werkzeug.serving import make_server

import os
from os import environ
import sys
import functions

script_dir = os.getcwd()
my_module_path = os.path.join(script_dir, ".")
sys.path.append(my_module_path)
os.chdir(os.path.dirname(__file__))

app = Flask(__name__)
cors = CORS(app, resources={r"/filter_several": {"origins": "https://client-calculadora-several2.thankfulgrass-02544078.westeurope.azurecontainerapps.io"}})
CORS(app)
app.config["DEBUG"] = True
limiter = Limiter(
    app,
    default_limits=["1000 per day", "50 per hour"]
)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,true')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response


@app.route('/', methods=['GET'])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def home():
   return "API ws-several"

@app.route('/filter_several', methods=['GET'])
@limiter.limit("100 per minute")
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def filter_info():

    schema = {
    'cia': {'type': 'string', 'minlength': 1, 'maxlength': 100},
    'zone': {'type': 'string', 'minlength': 1, 'maxlength': 50},
    'rate': {'type': 'string', 'minlength': 1, 'maxlength': 10},
    'indexed_date': {'type': 'string', 'minlength': 1, 'maxlength': 100},
    'fee': {'type': 'string', 'minlength': 1, 'maxlength': 100},
    'product_cia': {'type': 'string', 'minlength': 1, 'maxlength': 100},
    'market': {'type': 'string', 'minlength': 1, 'maxlength':10},
    }
    validator = Validator(schema)

    try:
        record = json.loads(request.data)
        if validator.validate(record):
            connection = functions.my_connection()
            response = functions.con_filter_info(connection, record)

            return {"response": response}

    except requests.exceptions.RequestException as e:
        return {'error': str(e)}
    
if __name__ == '__main__':
  server = make_server('0.0.0.0', 5002, app)
  server.serve_forever()