let minimo = 1;
let maximo = 100;
let num = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo; // Generar número aleatorio
let intentos = 0;
let usuario;

do {
    usuario = parseInt(prompt(`Ingresa un número entre ${minimo} y ${maximo}:`));
    intentos++;

    if (num > usuario) {
        document.write("El número que buscas es mayor.<br>");
    } else if (num < usuario) {
        document.write("El número que buscas es menor.<br>");
    } else {
        document.write(`¡Felicidades! Adivinaste el número ${num} en ${intentos} intentos.`);
    }
} while (num !== usuario);


   
