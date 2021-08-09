//Helpers
const esPar = (numero) => numero % 2 == 0

//Calculadora de mediana
const medianaSalarial = (lista) => {
  const mitad = parseInt(lista.length / 2)
  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1]
    const personaMitad2 = lista[mitad]
    const mediana = personaMitad1 + personaMitad2 / 2
    return mediana
  } else {
    const mediana = lista[mitad]
    return mediana
  }
}

//Mediana general
const salariosCol = colombia.map(({ salary }) => salary)

const salariosColOrdenado = salariosCol.sort(
  (salaryA, salaryB) => salaryA - salaryB
)

const medianaGeneralCol = medianaSalarial(salariosColOrdenado)

//Mediana top 10%
const sliceStart = (salariosColOrdenado.length * 90) / 100
const sliceCount = salariosColOrdenado.length

const salariosColTop10 = salariosColOrdenado.slice(sliceStart, sliceCount)

const medianaTop10Col = medianaSalarial(salariosColTop10)

console.log(medianaGeneralCol)
console.log(medianaTop10Col)
