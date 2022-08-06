import pandas as pd
from sqlalchemy import false

df=pd.read_csv('Notas_alunos.csv')

medias= ((df['nota_1'])+(df['nota_2']))/2

medias= df['Média']

df.loc[df['Média']>=7, 'Situação'] = 'Aprovado'
df.loc[df['Média']<7, 'Situação'] = 'Reprovado'
df.loc[df['faltas']>5, 'Situação'] = 'Reprovado'

df.to_csv('Alunos_situacao.csv', index=false)

Mfaltas= df['faltas'].max()
Gmedia= df['Média'].median()
Mmedia= df['Média'].max()

print("O maior número de faltas é: " + str(Mfaltas))
print("A média geral é: " + str(Gmedia))
print("A maior média é: " + str(Mmedia))
