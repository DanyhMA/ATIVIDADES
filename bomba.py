import time 

inicio=5
final=-1

print ("Iniciando contagem regressiva: ")

for i in range (inicio, final, -1):
    time.sleep (1)
    print(i)

print ("BOOM!!")