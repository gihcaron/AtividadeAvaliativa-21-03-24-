let sequencia = [1, 4, 7, 9, 2, 11] ;

let par = [];

let imparr = [];

for (let i = 0; i < sequencia.length; i++) {
    if (sequencia[i] % 2 == 0) {
        par.push(sequencia[i]);
    } else {
        imparr.push(sequencia[i]);
    }
}

let pares = sequencia.sort((a, b) => b - a);
let impar = sequencia.sort((a, b) => a - b);

console.log("Os números impares são " + imparr);
console.log("Os números pares são  " + par);
