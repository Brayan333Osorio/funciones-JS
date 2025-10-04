
//funciones recursivas// 
//ejemplo 1//
function factorial(n) {
    if (n === 0) {
        return 1; 
    } else {
        return n * factorial(n - 1); 
    }
}

console.log("Factorial de 0:", factorial(0)); 
console.log("Factorial de 3:", factorial(3)); 
console.log("Factorial de 5:", factorial(5)); 
console.log("Factorial de 7:", factorial(7)); 

//Ejemplo 2// 

function fibonacci(n) {
    if (n === 0) {
        return 0; 
    } else if (n === 1) {
        return 1; 
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); 
    }
}

console.log("Fibonacci de 0:", fibonacci(0)); 
console.log("Fibonacci de 1:", fibonacci(1)); 
console.log("Fibonacci de 5:", fibonacci(5)); 
console.log("Fibonacci de 7:", fibonacci(7));


//funciones predefinidas//
//Ejemplo 1// 
const texto = "Hola Mundo";
// Convertir toda la cadena a mayúsculas//
const mayusculas = texto.toUpperCase();
console.log("Mayúsculas:", mayusculas); 
const reemplazo = texto.replace("Mundo", "JavaScript");
console.log("Reemplazo:", reemplazo); 
const subcadena = texto.substring(0, 4);
console.log("Subcadena:", subcadena);

//Ejemplo 2// 

const number = [5, 3, 8, 1, 2];

const ordenados = number.slice().sort((a, b) => a - b);
console.log("Ordenados:", ordenados); 
const mayoresQueTres = number.filter(num => num > 3);
console.log("Mayores que 3:", mayoresQueTres); 
const suma = number.reduce((acum, num) => acum + num, 0);
console.log("Suma:", suma); 


//Funciones basicas con arreglos// 
//Ejemplo 1// 
function mostrarFrutas() {
    alert("Frutas actuales: " + frutas.join(", "));
}
/**
 * Función agregarFruta:
 * Solicita al usuario una fruta para agregar al arreglo.
 */
function agregarFruta() {
    const fruta = prompt("¿Qué fruta quieres agregar?");
    if (fruta && fruta.trim() !== "") {
        frutas.push(fruta.trim());
        alert(`Se agregó "${fruta.trim()}".`);
        mostrarFrutas();
    } else {
        alert("No ingresaste ninguna fruta válida.");
    }
}
/**
 * Función eliminarFruta:
 * Solicita al usuario una fruta para eliminar del arreglo.
 */
function eliminarFruta() {
    const fruta = prompt("¿Qué fruta quieres eliminar?");
    if (fruta && fruta.trim() !== "") {
        const indice = frutas.indexOf(fruta.trim());
        if (indice !== -1) {
            frutas.splice(indice, 1);
            alert(`Se eliminó "${fruta.trim()}".`);
            mostrarFrutas();
        } else {
            alert(`La fruta "${fruta.trim()}" no está en el arreglo.`);
        }
      } else {
        alert("No ingresaste ninguna fruta válida.");
    }
}

function menu() {
    let opcion;
    do {
        opcion = prompt(
            "Elige una opción:\n" +
            "1. Mostrar frutas: \n" +
            "2. Agregar fruta: \n" +
            "3. Eliminar fruta: \n" +
            "4. Salir"
        );
        switch (opcion) {
            case "1":
                mostrarFrutas();
                break;
            case "2":
                agregarFruta();
                break;
            case "3":
                eliminarFruta();
                break;
            case "4":
                alert("¡Adiós!");
                break;
            default:
                alert("Opción no válida. Por favor, ingresa un número del 1 al 4.");
        }
    } while (opcion !== "4");
}

menu();

//Ejemplo 2// 
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
    console.log("Número:", numero);
});

const cuadrados = numeros.map(function(numero) {
    return numero * numero;
});
console.log("Números al cuadrado:", cuadrados); // [1, 4, 9, 16, 25]