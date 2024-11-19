import pandas as pd

file_path = 'C:/Users/Eduardo/ReactProjects/data-web/backend-dataweb/service/TEMPLATE_170.csv'
df = pd.read_csv(file_path, delimiter=';', index_col= False, header=None)
df = df.T
cols = df.iloc[0].to_list()
df.columns = df.iloc[0]
df = df[1:]

df_to_json = {nome:{x: f"{df.iloc[i][x]}" for x in cols if x != 'NOME_DA_SUBCLASSE'} for i, nome in enumerate(df['NOME_DA_SUBCLASSE'])}

print(df_to_json)