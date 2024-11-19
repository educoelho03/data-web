from flask import Flask, jsonify, request
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
        file_path = 'C:/Users/Eduardo/ReactProjects/data-web/backend-dataweb/service/TEMPLATE_170.csv'
        df = pd.read_csv(file_path, delimiter=';', index_col=False, header=None)
        df = df.T 
        cols = df.iloc[0].to_list()
        df.columns = df.iloc[0]
        df = df[1:]

        # Converta todos os valores para strings para evitar erros de tipo
        df_to_json = {nome: {x: str(df.iloc[i][x]) for x in cols if x != 'NOME_DA_SUBCLASSE'} for i, nome in enumerate(df['NOME_DA_SUBCLASSE'])}

        return jsonify(df_to_json), 200
    except Exception as e:
        return jsonify({"error": f"Erro na API: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=True)