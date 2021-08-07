// Código cuadrado
console.group('Cuadrados')
const perimetroCuadrado = (lado) => lado * 4

const areaCuadrado = (lado) => lado * lado
console.groupEnd()

//Codigo triángulo
console.group('Triángulos')
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base

const areaTriangulo = (base, altura) => (base * altura) / 2
console.groupEnd()

//Triángulo isósceles
console.group('Triángulo isósceles')

const calcularAlturaIsosceles = (hipotenusa, base) => {
  const altura = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(base, 2) / 4)
  return altura.toFixed(4)
}

const alturaTrianguloIsosceles = (lado1, lado2, base) => {
  if (lado1 === lado2 && lado1 != base) {
    var alturaT = calcularAlturaIsosceles(lado1, base)
  } else if (lado1 === base && lado1 != lado2) {
    var alturaT = lado1
  } else if (lado2 === base && lado2 != lado1) {
    var alturaT = lado2
  } else {
    console.log('No es un triángulo isósceles')
  }
  console.log(alturaT)
}

console.groupEnd()

//Codigo circulos
console.group('Circulos')
const diametroCirculo = (radio) => radio * 2

const PI = Math.PI
console.log(`PI es: ${PI.toFixed(3)}`)

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI

const areaCirculo = (radio) => Math.pow(radio, 2) * PI
console.groupEnd()

//Interación con HTML --Cuadrados

const calcularPerimetroCuadrado = () => {
  const input = document.getElementById('input-cuadrado')
  const value = input.value

  const perimetro = perimetroCuadrado(value)
  alert(perimetro)
}
const calcularAreaCuadrado = () => {
  const input = document.getElementById('input-cuadrado')
  const value = input.value

  const area = areaCuadrado(value)
  alert(area)
}
//Interacción con HTML --Triangulos--
const calcularPerimetroTriangulo = () => {
  const input1 = document.getElementById('input-triangulo__lado1')
  const input2 = document.getElementById('input-triangulo__lado2')
  const input3 = document.getElementById('input-triangulo__base')
  const value1 = parseInt(input1.value)
  const value2 = parseInt(input2.value)
  const value3 = parseInt(input3.value)

  const perimetro = perimetroTriangulo(value1, value2, value3)
  alert(perimetro)
}
const calcularAreaTriangulo = () => {
  const input1 = document.getElementById('input-triangulo__base')
  const input2 = document.getElementById('input-triangulo__altura')
  const value1 = input1.value
  const value2 = input2.value

  const area = areaTriangulo(value1, value2)
  alert(area)
}

//Interacción con HTML --Circulos--
const calcularPerimetroCirculo = () => {
  const input = document.getElementById('input-circulo')
  const value = input.value

  const perimetro = perimetroCirculo(value).toFixed(3)
  alert(perimetro)
}
const calcularAreaCirculo = () => {
  const input = document.getElementById('input-circulo')
  const value = input.value

  const area = areaCirculo(value).toFixed(3)
  alert(area)
}
