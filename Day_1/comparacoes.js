// ===============================
// Declaração das variáveis
// ===============================
// Aqui temos números e strings que representam os mesmos valores,
// mas com TIPOS diferentes para testar as comparações do JavaScript

let numeroUm = 1
let stringUm = '1'

let numeroTrinta = 30
let stringTrinta = '30'

let numeroDez = 10
let stringDez = '10'


// ===============================
// Comparação usando ==
// ===============================
// O operador == compara apenas o VALOR,
// ignorando o tipo da variável (number ou string)

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}


// ===============================
// Comparação usando ===
// ===============================
// O operador === compara o VALOR e o TIPO.
// Como um é number e o outro é string, o resultado será false

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}


// ===============================
// Outro exemplo usando ==
// ===============================
// Mesmo sendo tipos diferentes, o JavaScript considera os valores iguais
// quando usamos o operador ==

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}


// ===============================
// Conclusão do exercício
// ===============================
// Neste desafio foi possível entender a diferença entre:
// ==  (compara apenas o valor)
// === (compara valor e tipo)
//
// Usar === é mais seguro e recomendado na maioria dos casos
