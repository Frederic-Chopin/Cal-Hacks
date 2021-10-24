from flask import Flask, jsonify, request
from flask_cors import CORS

from query import *

app = Flask(__name__)
CORS(app)

@app.route('/phase/post', methods=['POST'])
def phase_post():
    login_json = request.get_json()
    print(login_json)

    if not login_json:
        return jsonify({'msg': 'Missing JSON'}), 400

    courseNames = login_json.get('courses')
    query_input = []

    for item in courseNames:
        query_input.append((item["courseName"], item["priority"]))
    print(query_input)

    return jsonify({'phases': take_query(query_input)}), 200

if __name__ == "__main__":
    app.run(debug=True)