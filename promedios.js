//Promedio
const lista = [100, 200, 300, 500]

const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce((acumulador, numero) => acumulador + numero)

  const promedio = sumaLista / lista.length

  return promedio
}
console.log(calcularMediaAritmetica([1, 14, 151, 1000000]))

// Promedio ponderado

console.group('Promedio ponderado')
const notes = [
  {
    course: 'Fisica',
    note: 10,
    credit: 2,
  },
  {
    course: 'Programación',
    note: 8,
    credit: 5,
  },
  {
    course: 'Finanzas',
    note: 7,
    credit: 5,
  },
]

const notesWithCredit = notes.map(({ note, credit }) => note * credit)

const sumeNotesWithCredit = notesWithCredit.reduce(
  (sum, newVal) => sum + newVal
)

const credits = notes.map(({ credit }) => credit)

const sumOfCredits = credits.reduce((sum, newVal) => sum + newVal)

const promedioPonderadoNotasConCreditos = sumeNotesWithCredit / sumOfCredits

console.log(promedioPonderadoNotasConCreditos)
console.groupEnd()
