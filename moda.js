const lista = [1, 1, 2, 4, 3, 4, 1, 2, 3, 4, 4, 4, 4, 2, 1, 1, 1]
const otraLista = [1, 2, 1, 3, 4]

const listaCount = {}

const calcularModa = (lista) => {
  lista.map((elemento) => {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1
    } else {
      listaCount[elemento] = 1
    }
  })

  const listaArray = Object.entries(listaCount).sort(
    (elementoA, elementoB) => elementoA[1] - elementoB[1]
  )

  const moda = listaArray[listaArray.length - 1]
  return moda
}

console.log(calcularModa(otraLista))
