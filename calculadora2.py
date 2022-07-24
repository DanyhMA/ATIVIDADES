from sqlalchemy import false, true


def calculadora ():
    
    while (true):
        print("Selecione a operação:\n 1. Soma\n 2.subtração\n 3.multiplicação\n 4.divisão\n 0.sair\n")
        operacao = int(input())
        if operacao == 1:
            n1=float(input("Digite um número:"))
            n2=float(input("Digite outro numero:"))
            res=n1+n2
            print(res)
            break
        elif operacao ==2:
            n1=float(input("Digite um número:"))
            n2=float(input("Digite outro numero:"))
            res=n1-n2
            print(res)
            break
        elif operacao == 3:
            n1=float(input("Digite um número:"))
            n2=float(input("Digite outro numero:"))
            res=n1*n2
            print(res)
            break
        elif operacao == 4:
            n1=float(input("Digite um número:"))
            n2=float(input("Digite outro numero:"))
            if (n1==0) or (n2==0):
                print ("Numro invalido para esta operação.")
                continue
            res=n1/n2
            print(res)
            break
        elif operacao >4:
            print("opção invalida!")
            break
        elif operacao == 0:
            print("Obrigada.")
            break

    

calculadora()