// Programa que declare un vector de diez elementos enteros y pida números para 
// rellenarlo hasta que se llene el vector o se introduzca un número negativo. 
// Entonces se debe imprimir el vector (sólo los elementos introducidos).

let vec = [];
for (let i = 1; i < 10; i++) {
    vec[i] = 0;
}
console.log({vec});
for (let i = 0; i < vec.length; i++) {
    const num = +(prompt("Ingrese un número entero:"));
    if (num > 0) {
        vec[i] = num;
    } else {
        i = 11;
    }
}
console.log({vec});