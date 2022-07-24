from sqlalchemy import false, true

ano=false
while (ano==false):
    nome=str(input("Digite seu nome completo: "))
    try:
        ano=int(input("Digite o seu ano de nascimento: "))
        if (ano>1922) and (ano<2022):
            res=2022-ano
            print("Sua idade em 2022, será:", res)
        else:
            print("Ano invalido.")   
    except:
        print("Por favor, digite um número válido..") 