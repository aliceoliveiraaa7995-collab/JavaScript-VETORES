console.log("EXERCÍCIO 1");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("EXERCÍCIO 2");
let numero = 5;
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}

console.log("EXERCÍCIO 3");
let num3 = 1;
let soma3 = 0;
while (num3 <= 100) {
  soma3 = soma3 + num3;
  num3++;
}
console.log("A soma é: " + soma3);

console.log("EXERCÍCIO 4");
let num4 = 0;
while (num4 <= 20) {
  console.log(num4);
  num4 = num4 + 2;
}

console.log("EXERCÍCIO 5");
let cont5 = 10;
do {
  console.log(cont5);
  cont5--;
} while (cont5 >= 1);

console.log("EXERCÍCIO 6");
let usuario = {
  nome: "Lucas",
  idade: 25,
  cidade: "Salvador"
};
for (let chave in usuario) {
  console.log(chave + ": " + usuario[chave]);
}

console.log("EXERCÍCIO 7");
let notas = [7.0, 8.5, 9.0, 7.5];
let soma7 = 0;
for (let nota of notas) {
  soma7 = soma7 + nota;
}
let media = soma7 / notas.length;
console.log("A média é: " + media);

console.log("EXERCÍCIO 8");
for (let i = 1; i <= 50; i = i + 2) {
  console.log(i);
}

console.log("EXERCÍCIO 9");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}