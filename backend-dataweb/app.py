import pandas as pd 

from flask import Flask, jsonify

@app.route('/api/test')
def test_route():
    return jsonify({"msg": "Test route"}), 200

@app.route('/api/data')
def get_data():
    try:
        file_path = 'backend-dataweb/service/template-teste.CSV'
        data = pd.read_csv(file_path, delimiter=';')
        response_data = data.to_dict(orient='records')
        return jsonify(response_data), 200
    except Exception as e:
        return jsonify({"Erro na api: f'{e}'"}), 500

if __name__ == '__main__':
    app.run(debug=True)