let num1 = prompt("Digite o primeiro número: ");
let num2 = prompt("Digite o segundo número: ");

if (num1 < "0" || num1 > "99") {
  alert("O número deve ser de 0-100");
} else if (num2 < "0" || num2 > "99") {
  alert("O número deve ser de 0-100");
}

console.log("Num1: " + num1);
console.log("Num2: " + num2);


for (let i = 0; i < num1.length; i++) {
  if (num1[i] === "7") {
    num1 = num1.replace("7", "0");
  }
}

for (let i = 0; i < num2.length; i++) {
  if (num2[i] === "7") {
    num2 = num2.replace("7", "0");
  }
}

num1 = parseInt(num1);
num2 = parseInt(num2);

let soma = num1 + num2;

if (soma.toString().includes("7")) {
  soma = parseInt(soma.toString().replace(/7/g, "0"));
}

console.log("Soma: " + soma);
