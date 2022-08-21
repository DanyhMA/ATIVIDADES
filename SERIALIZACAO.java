fileoutputstream item = new fileoutputstream ('listaDeCompras.csv')
objectoutputstream lista = new objectoutputstream (item)
lista.writeobject (listaserializavel)
lista.close()

fileinputstream item = new fileinputstream
objectinputstream lista = new objectinputstream (item)
listaserializavel lista.readobject
lista.close()
return serializado