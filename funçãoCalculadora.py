def calculadora (n1, n2, operacao):
    if operacao == 1:
        res = n1+n2
        print(res)
    elif operacao == 2:
        res = n1-n2
        print (res)
    elif operacao == 3:
        res = n1*n2
        print (res)
    elif operacao == 4:
        res = n1/n2
        print(res)

calculadora()
