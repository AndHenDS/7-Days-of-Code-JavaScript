alert('Olá usuario!!');

let respostaUsuario1;

while (respostaUsuario1 !== 'front-end' && respostaUsuario1 !== 'back-end') {
    respostaUsuario1 = prompt('Você quer seguir para o (Front-End) ou (Back-End) ?').toLowerCase();
};

let respostaFront;

if (respostaUsuario1 === 'front-end') {
    alert('Então você se considera uma pessoa digamos mais criativa visualmente');
    respostaFront = prompt('Agora escolha, React ou Vue?').toLowerCase();

} else {
    alert('Então você se considera uma pessoa mais da area lógica da área');
    respostaFront = prompt('Agora escolha, C# ou Java?').toLowerCase();
};

let respostaFront1;

while (respostaFront1 !== 'especializar' && respostaFront1 !== 'fullstack') {
    respostaFront1 = prompt('Você quer se (Especializar) na área ou virar (Fullstack?)').toLowerCase();
};

if (respostaFront1 === 'especializar') {
    alert('Você vai se tornar referência nessa área');
} else {
    alert('Você vai ter uma visão completa do sistema');
};

alert(
    'Recapitulando você quer seguir carreira de ' +
    respostaUsuario1 +
    ' e dentro do ' +
    respostaUsuario1 +
    ' você escolheu ' +
    respostaFront +
    ' e você deseja => ' +
    respostaFront1
);


let respostaExtra;

while (respostaExtra !== 'sim' && respostaExtra !== 'nao') {
    respostaExtra = prompt('Dito isso, tem mais alguma linguagem que você gostaria de aprender? responda com sim ou não').toLowerCase().normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
};

let linguagem;

const linguagensValidas = [
    'html', 'css', 'typescript', 'javascript', 'python', 'java', 'php',
    'ruby', 'go', 'rust', 'kotlin', 'swift', 'scala',
    'dart', 'elixir', 'c', 'c++', 'sql', 'mysql',
    'postgresql', 'transact-sql', 'oraclesql', 'c#'
]


if (respostaExtra === 'sim') {

    // CORREÇÃO: Perguntar primeiro antes de validar
    linguagem = prompt('Qual linguagem voce quer aprender?').toLowerCase();

    while (!linguagensValidas.includes(linguagem)) {
        alert('Linguagem inválida, tente novamente.');
        linguagem = prompt('Qual linguagem voce quer aprender?').toLowerCase();
    }

    if (
        linguagem === 'html' ||
        linguagem === 'css' ||
        linguagem === 'typescript' ||
        linguagem === 'javascript'
    ) {
        alert('Essa linguagem é usada para criar a parte visual de aplicações e definir como o usuário interage com o sistema.');

    } else if (
        linguagem === 'python' ||
        linguagem === 'java' ||
        linguagem === 'php' ||
        linguagem === 'ruby' ||
        linguagem === 'kotlin' ||
        linguagem === 'swift' ||
        linguagem === 'scala' ||
        linguagem === 'dart') {

        alert('Essa linguagem é usada no lado do servidor para criar regras, processar dados e sustentar aplicações.');

    } else if (
        linguagem === 'go' ||
        linguagem === 'rust') {

        alert('Essa linguagem foca em desempenho e eficiência, sendo indicada para sistemas que precisam ser rápidos e escaláveis.')

    } else if (
        linguagem === 'c' ||
        linguagem === 'c++' ||
        linguagem === 'c#') {

        alert('Essa linguagem oferece controle direto sobre memória e recursos do sistema.')

    } else if (
        linguagem === 'sql' ||
        linguagem === 'postgresql' ||
        linguagem === 'transact-sql' ||
        linguagem === 'oraclesql' ||
        linguagem === 'mysql'
    ) {
        alert('Essa linguagem é usada para consultar e manipular dados em bancos de dados.')

    } else if (linguagem === 'elixir') {
        alert('Essa linguagem é voltada para sistemas concorrentes e aplicações distribuídas.')

    } else {

        alert('Invalido')
    }

} else {
    alert('Até a proxima')
}

let respostaExtra2;

respostaExtra2 = prompt('Voce quer aprender mais alguma lingua? sim ou não').toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

let linguagem2;

if (respostaExtra2 === 'sim') {


    linguagem2 = prompt('Qual linguagem?').toLowerCase();


    while (linguagem2 === linguagem) {
        alert('Proibido repetir a resposta anterior.');


        linguagem2 = prompt('Por favor, escolha OUTRA linguagem:').toLowerCase();
    }

    alert('Segunda linguagem escolhida: ' + linguagem2);

    while (!linguagensValidas.includes(linguagem)) {
        alert('Linguagem inválida, tente novamente.');
    }

    if (
        linguagem === 'html' ||
        linguagem === 'css' ||
        linguagem === 'typescript' ||
        linguagem === 'javascript'
    ) {

        alert('Essa linguagem é usada para criar a parte visual de aplicações e definir como o usuário interage com o sistema.');


    } else if (
        linguagem === 'python' ||
        linguagem === 'java' ||
        linguagem === 'php' ||
        linguagem === 'ruby' ||
        linguagem === 'kotlin' ||
        linguagem === 'swift' ||
        linguagem === 'scala' ||
        linguagem === 'dart') {

        alert('Essa linguagem é usada no lado do servidor para criar regras, processar dados e sustentar aplicações.');

    } else if (
        linguagem === 'go' ||
        linguagem === 'rust') {

        alert('Essa linguagem foca em desempenho e eficiência, sendo indicada para sistemas que precisam ser rápidos e escaláveis.')

    } else if (
        linguagem === 'c' ||
        linguagem === 'c++' ||
        linguagem === 'c#') {

        alert('Essa linguagem oferece controle direto sobre memória e recursos do sistema.')

    } else if (
        linguagem === 'sql' ||
        linguagem === 'postgresql' ||
        linguagem === 'transact-sql' ||
        linguagem === 'oraclesql' ||
        linguagem === 'mysql'
    ) {

        alert('Essa linguagem é usada para consultar e manipular dados em bancos de dados.')


    } else if (linguagem === 'elixir') {

        alert('Essa linguagem é voltada para sistemas concorrentes e aplicações distribuídas.')

    } else {
        alert('Invalido')
    }

} else {
    alert('Adeus')
}

let respostaExtra3;

respostaExtra2 = prompt('Voce quer aprender mais alguma lingua? sim ou não').toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

let linguagem3;

if (respostaExtra3 === 'sim') {


    linguagem2 = prompt('Qual linguagem?').toLowerCase();


    while (linguagem3 === linguagem2 && linguagem3 === linguagem) {
        alert('Proibido repetir a resposta anterior.');


        linguagem3 = prompt('Por favor, escolha OUTRA linguagem:').toLowerCase();
    }

    alert('Segunda linguagem escolhida: ' + linguagem3);

    while (!linguagensValidas.includes(linguagem)) {
        alert('Linguagem inválida, tente novamente.');
    }

    if (
        linguagem === 'html' ||
        linguagem === 'css' ||
        linguagem === 'typescript' ||
        linguagem === 'javascript'
    ) {

        alert('Essa linguagem é usada para criar a parte visual de aplicações e definir como o usuário interage com o sistema.');


    } else if (
        linguagem === 'python' ||
        linguagem === 'java' ||
        linguagem === 'php' ||
        linguagem === 'ruby' ||
        linguagem === 'kotlin' ||
        linguagem === 'swift' ||
        linguagem === 'scala' ||
        linguagem === 'dart') {

        alert('Essa linguagem é usada no lado do servidor para criar regras, processar dados e sustentar aplicações.');

    } else if (
        linguagem === 'go' ||
        linguagem === 'rust') {

        alert('Essa linguagem foca em desempenho e eficiência, sendo indicada para sistemas que precisam ser rápidos e escaláveis.')

    } else if (
        linguagem === 'c' ||
        linguagem === 'c++' ||
        linguagem === 'c#') {

        alert('Essa linguagem oferece controle direto sobre memória e recursos do sistema.')

    } else if (
        linguagem === 'sql' ||
        linguagem === 'postgresql' ||
        linguagem === 'transact-sql' ||
        linguagem === 'oraclesql' ||
        linguagem === 'mysql'
    ) {

        alert('Essa linguagem é usada para consultar e manipular dados em bancos de dados.')


    } else if (linguagem === 'elixir') {

        alert('Essa linguagem é voltada para sistemas concorrentes e aplicações distribuídas.')

    } else {
        alert('Invalido')
    }

} else {
    alert('Adeus')
}




