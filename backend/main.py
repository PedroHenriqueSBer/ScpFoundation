from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

users_database = {}

class db:
    def __init__(self):
        with open("db.json", encoding='utf-8') as file:
            self.database = json.load(file)
        self.users = self.database['users']
        self.scps = self.database['scps']
    def save(self):
        self.database['users'] = self.users
        self.database['scps'] = self.scps
        with open("db.json", encoding='utf-8') as file:
            file.write(self.database)
    def get(self):
        with open("db.json", encoding='utf-8') as file:
            self.database = json.load(file)
        self.users = self.database['users']
        self.scps = self.database['scps']
        

databaseObject = db()
databaseObject.get()

@app.route('/user/login', methods=['POST'])
def login():
    try:
        databaseObject.get()
        data = request.get_json()
        name = data.get('name')
        password = data.get('password')
        user = None

        for u in databaseObject.users:
            if u["name"] == name and u["password"] == password:
                user = u
        
        if user:
            return jsonify(user)
        else:
            return jsonify({"error": "Usuário não encontrado"}), 404
    except Exception as e:
        return jsonify({"error": e}), 404
    
@app.route('/user/<id>', methods=['GET'])
def getById(id):
    try:
        databaseObject.get()
        user = None

        for u in databaseObject.users:
            if u["id"] == id:
                user = u
        
        if user:
            return jsonify(user)
        else:
            return jsonify({"error": "Usuário não encontrado"}), 404
    except Exception as e:
        return jsonify({"error": e}), 404

@app.route('/user/update', methods=['POST'])
def userUpdate():
    return jsonify({'error':'não implementado'})

@app.route('/scp/get/<user_id>', methods=['GET'])
def get_scps(user_id):
    try:
        databaseObject.get()
        user = None

        for u in databaseObject.users:
            if u["id"] == user_id:
                user = u
        
        if user:
            scp = []

            for s in databaseObject.scps:
                if s["dangerLevel"] <= user['type']:
                    scp.append(s)
            return jsonify(scp)
        else:
            return jsonify({"error": "Usuário não encontrado"}), 404
    except Exception as e:
        return jsonify({"error": e}), 404


if __name__ == '__main__':
    app.run(debug=True)