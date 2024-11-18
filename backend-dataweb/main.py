import pandas as pd

file_path = 'data-web/backend-dataweb/service/Template-teste.CSV'
data = pd.read_csv(file_path, sep=';')
response_data = data.to_json(orient='records')
print(data)
print(response_data)