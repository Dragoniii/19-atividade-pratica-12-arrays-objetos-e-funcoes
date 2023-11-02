const data = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",
    sexo: "F",
    salario: 3350.25,
  },
];

//1. Imprima no console a quantidade de pessoas Total ------------------------------------------------------------------------------
console.log("1 - Eu - Imprima no console a quantidade de pessoas Total:");
console.log(data.length);
console.log(
  "------------------------------------------------------------------------------"
);

console.log("1 - TIME - Imprima no console a quantidade de pessoas Total:");
console.log(data ? data.length : 0);

console.log(
  "------------------------------------------------------------------------------"
);

//2 Imprima no console a quantidade de pessoas pessoas do sexo Feminino ------------------------------------------------------------------------------
console.log(
  "2 - Eu - Imprima no console a quantidade de pessoas pessoas do sexo Feminino:"
);
let mulheres = 0;

for (let value of data) {
  if (value.sexo === "F") {
    mulheres++;
  }
}
console.log(mulheres);

console.log(
  "------------------------------------------------------------------------------"
);

function contarMulheres(dados) {
  return dados.filter((pessoa) => pessoa.sexo === "F").length;
}

console.log(
  "2 - TIME - Imprima no console a quantidade de pessoas do sexo Feminino:"
);
const numeroMulheres = contarMulheres(data);
console.log(numeroMulheres);
console.log(
  "------------------------------------------------------------------------------"
);
//3. Imprima no console a soma do salário de todas as pessoas ------------------------------------------------------------------------------
console.log(
  "3 - Eu - Imprima no console a soma do salário de todas as pessoas "
);
var total = data.reduce(getTotal, 0);
function getTotal(total, item) {
  return total + item.salario;
}
console.log(total);

console.log(
  "------------------------------------------------------------------------------"
);

console.log(
  "3 - Time - Imprima no console a soma do salário de todas as pessoas "
);
const soma = data.reduce((acc, num) => acc + num.salario, 0);
console.log(soma);
console.log(
  "------------------------------------------------------------------------------"
);

//4. Imprima no console a média do salário de todas as pessoas ------------------------------------------------------------------------------
console.log(
  "4 - Eu - Imprima no console a média do salário de todas as pessoas "
);
const mediaTodos =
  data.reduce((acc, num) => acc + num.salario, 0) / data.length;
console.log(mediaTodos.toFixed(2));
console.log(
  "------------------------------------------------------------------------------"
);

console.log(
  "4 - TIME - Imprima no console a média do salário de todas as pessoas "
);

let totalSalary = 0;
data.forEach((person) => {
  totalSalary += person.salario;
});
const averageSalary = totalSalary / data.length;
console.log(averageSalary.toFixed(2));
console.log(
  "------------------------------------------------------------------------------"
);
//5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino ------------------------------------------------------------------------------
console.log(
  "5 - Eu - Imprima no console a soma do salário de todos as pessoas do sexo Masculino "
);
const salarioMasculino = data.filter((masculino) => masculino.sexo === "M");
console.log(salarioMasculino.reduce((acc, num) => acc + num.salario, 0));
console.log(
  "------------------------------------------------------------------------------"
);

console.log(
  "5 - TIME - Imprima no console a soma do salário de todos as pessoas do sexo Masculino "
);
let somaSalariosMasculino = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].sexo === "M") {
    somaSalariosMasculino += data[i].salario;
  }
}

console.log(somaSalariosMasculino);
console.log(
  "------------------------------------------------------------------------------"
);
//6. Imprima no console a média do salário de todas as pessoas do sexo Masculino ------------------------------------------------------------------------------
console.log(
  "6 - Eu - Imprima no console a média do salário de todas as pessoas do sexo Masculino"
);
const salarioMasculinoMedio = somaSalariosMasculino;
console.log((salarioMasculinoMedio / (data.length - mulheres)).toFixed(2));
console.log(
  "------------------------------------------------------------------------------"
);

console.log(
  "6 - TIME - Imprima no console a média do salário de todas as pessoas do sexo Masculino"
);
let somaHomens = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].sexo === "M") {
    somaHomens += 1;
  }
}

console.log((somaSalariosMasculino / somaHomens).toFixed(2));
console.log(
  "------------------------------------------------------------------------------"
);

//7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
console.log(
  "7 - Eu - Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso."
);
console.log(data.some((x) => x.salario > 7000));
console.log(
  "------------------------------------------------------------------------------"
);
console.log(
  "7 - TIME -Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso."
);
function salarioSuperiorA(valor) {
  return data.some((person) => person.salario > valor);
}
console.log(salarioSuperiorA(7000));
console.log(
  "------------------------------------------------------------------------------"
);

//8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'------------------------------------------------------------------------------
console.log(
  "8 - Eu - Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'."
);
const findIndex = data.findIndex((x) => x.nome === "Eva Trindade");
console.log(findIndex);
console.log(
  "------------------------------------------------------------------------------"
);

//9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva"------------------------------------------------------------------------------
console.log(
  "9 - Eu - Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome Silva."
);
function filterItems(arr, query) {
  return arr.filter((el) =>
    el.nome.toLowerCase().includes(query.toLowerCase())
  );
}
console.log(filterItems(data, "silva"));
console.log(
  "------------------------------------------------------------------------------"
);
console.log(
  "9 - TIME - Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome Silva."
);
const sobrenomeSilva = data.filter((pessoa) => /silva/i.test(pessoa.nome));
console.log(sobrenomeSilva.map((pessoa) => pessoa.nome));
console.log(
  "------------------------------------------------------------------------------"
);
//10. Imprima os nomes utilizando o MAP------------------------------------------------------------------------------
console.log("10 - Eu -  Imprima os nomes utilizando o MAP");
const map = data.map((x) => x.nome )
console.log(map);
console.log(
  "------------------------------------------------------------------------------"
);
console.log("10 - TIME - Imprima os nomes utilizando o MAP:");
const nomes = data.map(pessoa => pessoa.nome);
console.log(nomes);
console.log("------------------------------------------------------------------------------");
