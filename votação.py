from sqlalchemy import true


def votacao (candidato):
    global candidatoX, candidatoY, candidatoZ, branco, nulo 
    
    if candidato== 'FIM' or candidato== 'Fim' or candidato== 'fim':
        print('Votação encerrada!')
        resultado()
    
    
    if candidato=='1':
        candidatoX +=1
    elif candidato=='2':
        candidatoY +=1
    elif candidato=='3':
        candidatoZ +=1
    elif candidato=='0':
        branco +=1
    elif candidato !='1' or candidato !='2' or candidato !='3' or candidato !='0':
        nulo +=1
    else:
        candidato=str (input('Número invalido!\n Por favor digite um número valido:'))
        votacao(candidato)

def resultado ():
    global candidatoX, candidatoY, candidatoZ, branco, nulo
    print('Resultado da votação:\n')
    print('Candidato X: ' + str(candidatoX))
    print('Candidato Y: ' + str(candidatoY))
    print('Candidato Z: ' + str(candidatoZ))
    print('Brancos: ' + str(branco))
    print('Nulos: ' + str(nulo))
    exit()

candidatoX=0
candidatoY=0
candidatoZ=0
branco=0
nulo=0

while true:
    candidato=str(input('ELEIÇÃO\n Digite o número do seu candidato:\n'))
    votacao(candidato)