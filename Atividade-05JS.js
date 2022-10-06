let carro={
    marca:'BMW',
    modelo:'116 I',
    ano:2014
}

const paises=['Brasil', 'Portugal', 'Angola']

function propriedades(carro){
    for (const propriedade in carro){
        console.log(`${propriedade}: ${carro[propriedade]}`)
    }
    
}
console.log(propriedades(carro))

function elementos(paises){
    for (const elemento in paises){
        console.log(`${elemento}`)
    }
}
console.log(elementos(paises))

