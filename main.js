// E J E R C I C I O S       V A R I A B L E S



// alert("JavaScript funcionando correctamente");

let variableSinValor

let booleano1 = true
let booleano2 = false

const PI = 3.14

const TAU = PI * 2

const miNombre = "Eva"

let miNumeroFav = 4

const mayorDeEdad = true

console.log(miNombre.length)

console.log (typeof(miNumeroFav))

console.log('Mi nombre es ' + miNombre + ' y mi número favorito es ' + miNumeroFav)

console.log ('Seré un crack en JavaScript al terminar el bootcamp'.toUpperCase())

console.log('Hola soy un crack'.substring(0,6))

miNumeroFav = "4"
console.log(typeof(miNumeroFav))

const food = 'sushi'
const favoriteFood = `My favorite food is ${food}`
console.log(favoriteFood)

const numeroPI = Math.PI
console.log(numeroPI)

//  E J E R C I C I O S     D E     A R R A Y S

const arrayVacio = []

const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const arrayNumerosPares = [0, 2, 4, 6, 8]

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

const holaMundo = ['Hola', 'Mundo']

const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']

const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

console.log (loGuardoTodo.length)

loGuardoTodo.push('donut')
console.log(loGuardoTodo)

console.log(loGuardoTodo[1])

loGuardoTodo.push('Euralio')
console.log(loGuardoTodo[6])


//  E J E R C I C I O S     D E     O B J E T O S

const coche = {
  marca: 'Seat',
  modelo: 'Leon', 
  matricula: '1234 WXYZ'
}

const casa = {
  codPostal: 12345,
  calle: 'España', 
  portal: 4,
  piso: 2
}

fullStackDeveloper = {
  lenguajes: ['javascript', 'php'],
  proyectos: ['mi página personal', 'mi tienda online']
}

const perro = {
  nombre: 'Lucy',
  raza: 'Golden Retriever',
  color: 'blanco',
  edad: 1
}

const noticia = {
  titular: 'Nuevo mamífero en la Amazonía', 
  cuerpo: ' Investigadores hallan una especie de marsupial única en la región amazónica, destacando la importancia de la conservación del hábitat'
}

const persona = {
  nombre: 'Eva',
  apellidos: 'García Clemente',
  edad: 27
}

console.log(persona.nombre)

console.log(fullStackDeveloper.lenguajes[0])

const portatil = {
  marca: 'Lenovo'
}
console.log(portatil.marca)
console.log(portatil['marca'])

const concierto = {
  grupos: ['rock', 'jazz', 'pop', 'rap']
}
console.log(concierto.grupos)
console.log(concierto['grupos'])

const led = {
  lampara1: 'rojo',
  lampara2: 'verde',
  lampara3: 'azul'
}

const arrayRGB = [led.lampara1, led.lampara2, led.lampara3]
console.log (arrayRGB)

const o_Error = {
  codigo: 123456789
}
console.log(o_Error.codigo)
console.log(o_Error['codigo'])

const grupo = {
  integrantes: ['Eva', 'Iván', 'Óscar', 'Javi', 'Álvaro']
}

const integrantes = grupo.integrantes
console.log(integrantes[3])

const impresora = {
  objetoTinta: {
    rojo: 'rojo', 
    verde: 'verde',
    azul:'azul'}
}
const nivelesTinta = impresora.objetoTinta
console.log(nivelesTinta)

const movil = {
  especificaciones: 'cargar por completo antes de encender'
}
console.log(movil['especificaciones'])

portatil.marca = 'MSI'
console.log(portatil.marca)

concierto.grupos.push("Guns N' Roses")
console.log(concierto.grupos)

concierto.fecha = '2022-03-25'
console.log(concierto)

concierto.fecha = new Date
console.log(concierto.fecha)


grupo.integrantes.pop()
console.log (grupo.integrantes.length)