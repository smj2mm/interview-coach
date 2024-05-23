from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/api/hello', methods=['GET'])
def search():
    return jsonify("Hello world")
