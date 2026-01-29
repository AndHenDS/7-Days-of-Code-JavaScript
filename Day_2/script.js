// ==============================
// Boas-vindas ao usuário
// ==============================
alert("Olá, usuário! Seja bem-vindo!");
alert("Antes de começar, gostaria de saber seu nome.");

// ==============================
// Pergunta o nome do usuário
// ==============================
const nomeUsuario = prompt("Digite seu nome: ");

// Mensagem personalizada de boas-vindas
alert("Prazer em conhecer " + nomeUsuario);

// ==============================
// Pergunta a idade do usuário
// ==============================
alert("Também gostaria de saber sua idade");
const idadeUsuario = parseInt(prompt("Digite sua idade:"));

// ==============================
// Avalia a idade do usuário
// ==============================
if (idadeUsuario >= 18) {
    alert("Você é maior de idade, provavelmente bastante responsável.");
} else if (idadeUsuario >= 14 && idadeUsuario < 18) {
    alert("Um jovem interessado em programação, que legal!");
} else {
    alert("Você é muito jovem, que inesperado!");
}

// ==============================
// Pergunta qual linguagem o usuário está estudando
// ==============================
alert("Qual linguagem de programação você está estudando?");
const linguagemProgramaUsuario = prompt("Digite a linguagem:");

// ==============================
// Pergunta a cidade do usuário (extra)
// ==============================
const cidade = prompt("Digite sua cidade também:");
const msg = `e você é da cidade: ${cidade}!`;

// Mensagem final resumindo as informações
alert("Olá " + nomeUsuario + ", recapitulando: você tem " + idadeUsuario + 
    " anos de idade e já está aprendendo " + linguagemProgramaUsuario + ". " + msg);

// ==============================
// Exercício opcional: pergunta se gosta de estudar a linguagem
// ==============================
let linguagemInteresse;

// Loop para garantir que o usuário digite apenas 1 ou 2
while(true){
    linguagemInteresse = prompt("Você gosta de estudar " + linguagemProgramaUsuario + "? Responda com o número 1 para SIM ou 2 para NÃO.");

    if (linguagemInteresse === "1") {
        alert("Muito bom! Continue estudando e você terá muito sucesso.");
        break; // Sai do loop após resposta válida
    } else if (linguagemInteresse === "2") {
        alert("Ah, que pena... Já tentou aprender outras linguagens?");
        break; // Sai do loop após resposta válida
    } else {
        // Mensagem de erro se digitar algo diferente de 1 ou 2
        alert("Digite apenas 1 ou 2 para sua resposta.");
    }
}
