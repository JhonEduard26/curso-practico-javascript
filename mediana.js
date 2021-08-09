const lista = [1, 2, 500, 3]

lista.sort((a, b) => a - b)

const mitadLista = parseInt(lista.length / 2)

const esPar = (numero) => (numero % 2 === 0 ? true : false)

const calcularMediana = (lista) => {
  let mediana

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1]
    const elemento2 = lista[mitadLista]
    mediana = (elemento1 + elemento2) / 2
  } else {
    mediana = lista[mitadLista]
  }
  return mediana
}

console.log(calcularMediana(lista))
