from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS  # Importando CORS para lidar com problemas de CORS

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas as rotas

@app.route('/api/test')
def test_route():
    return jsonify({"msg": "teste"}), 200

@app.route('/api/data')
def get_data():
    try:    
        file_path = 'C:/Users/jzuanon/Documents/joao/code/react/compliance-page/data-web/backend-dataweb/service/Template-teste.CSV'
        data = pd.read_csv(file_path, delimiter=';')
        response_data = data.to_dict(orient='records')
        return jsonify(response_data), 200
    except Exception as e:
        return jsonify({"error": f"Erro na API: {str(e)}"}), 500 

if __name__ == '__main__':
    app.run(debug=True)