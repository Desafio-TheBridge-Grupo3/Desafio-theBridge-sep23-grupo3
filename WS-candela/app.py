import json
from flask import Flask, request, jsonify
from flask_limiter import Limiter
import signal
from cerberus import Validator
from werkzeug.serving import make_server

import os
from os import environ
import sys

script_dir = os.getcwd()
my_module_path = os.path.join(script_dir, "..")
sys.path.append(my_module_path)
os.chdir(os.path.dirname(__file__))

from webscraping import ws_app

app = Flask(__name__)
app.config["DEBUG"] = True
limiter = Limiter(
    app,
    default_limits=["1000 per day", "50 per hour"]
)

@app.route('/', methods=['GET'])
def home():
  return "API"

@app.route('/shutdown', methods=['POST'])
def shutdown():
    if request.method == 'POST':
        print("Deteniendo la aplicación...")
        os.kill(os.getpid(), signal.SIGINT)
        return jsonify(message="Server shutting down..."), 200
    else:
        return jsonify(error="Invalid request method"), 405

@app.route('/cups20', methods=['GET'])
@limiter.limit("10 per minute")
def calcule_energy_consumption():
    
    # response = requests.get('https://example.com', verify=True)

    schema = {
    'cups20': {'type': 'string', 'minlength': 20, 'maxlength': 22},
    }
    validator = Validator(schema)

    record = json.loads(request.data)

    if validator.validate(record):
        cups20 = record["cups20"]
        info = ws_app.webscraping_chrome_candelas(cups20)
        return {"info": info}
    else:
        return {'error': f'Data is invalid {validator.errors}'}


if __name__ == '__main__':
  server = make_server('127.0.0.1', 5000, app)
  server.serve_forever()