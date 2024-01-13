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
        self.bank = self.database['bank']
    def save(self):
        self.database['users'] = self.users
        self.database['scps'] = self.scps
        self.database['bank'] = self.bank
        with open("db.json", "w", encoding='utf-8' ) as file:
            file.write(json.dumps(self.database))
    def get(self):
        with open("db.json", encoding='utf-8') as file:
            self.database = json.load(file)
        self.users = self.database['users']
        self.scps = self.database['scps']
        self.bank = self.database['bank']
        

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
            if u["name"] == name.strip() and u["password"] == password.strip():
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

@app.route('/bank/<user_id>', methods=['GET'])
def get_bank(user_id):
    try:
        databaseObject.get()
        bank = None
        user = None

        for u in databaseObject.users:
            if u["id"] == user_id:
                user = u
        if user:
            for b in databaseObject.bank:
                if b["id"] == user["bankId"]:
                    bank = b
            
            if bank:
                return jsonify(bank)
            else:
                return jsonify({"error": "banco não encontrado"}), 404
        else:
            return jsonify({"error": "usuário não encontrado"}), 404
    except Exception as e:
        return jsonify({"error": e}), 404

@app.route('/user/save', methods=['POST'])
def user_save():
    try:
        databaseObject.get()
        data = request.get_json()
        user = data.get('user')
        bank = data.get('bank')
        users = []
        banks = []
        for u in databaseObject.users:
            if u["id"] == user["id"]:
                u = user
            users.append(u)
        databaseObject.users = users

        for b in databaseObject.bank:
            if b["id"] == bank["id"]:
                b = bank
            banks.append(b)
        databaseObject.bank = banks
        
        databaseObject.save()
        return jsonify({"success": databaseObject.users})
    except Exception as e:
        return jsonify({"error": e}), 404

if __name__ == '__main__':
    app.run(debug=True)