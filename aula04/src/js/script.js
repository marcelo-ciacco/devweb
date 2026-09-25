console.log("JavaScript funcionando");


//Variaveis

const nome = "Maria";
let idade = 20;

//Tipos de dados
//string
const sobrenome = "Silva";
//number => inteiro ou decimal
const valor = 15;
//boolean
const ativo = true;
//null
const endereco = null;

console.log(typeof(sobrenome));
console.log(typeof(valor));
console.log(typeof(ativo));
console.log(typeof(endereco));

//Template String
let msg = "Olá" + nome + " .Você tem " + idade + " anos.";

msg = `Olá ${nome}, você tem ${idade} anos`;
console.log(msg);

//Condicional
if(idade >= 18){
    console.log("Acesso Autorizado");
} else {
    console.log("Acesso Negado");
}

let numero = '10';
if(numero === 10 && numero > 0){
    console.log("numero valido e permitido");
} else {
    console.log("numero invalido e não permitido")
}

//operador ternário
numero > 10 ? "numero valido" : "numero invalido";

//Funções

function exibirMensagem(){
    console.log("Cadastro realizado");
}

exibirMensagem();

function exibirMensagemComParametro(nome){
    console.log(`Olá ${nome}`);
}

exibirMensagemComParametro("Marcelo");

function somar(n1, n2){
    return n1 + n2;
}

const result = somar(10,5);
exibirMensagemComParametro(result);

//Arrow Function
const soma = (n1, n2) => {
    return n1 + n2;
}

//Manipular o DOM (Document Object Model)
const formulario = document.querySelector("#formCadastro");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoIdade = document.querySelector("#idade");

const mensagem = document.querySelector("#mensagem");
const listaUsuarios = document.querySelector("#listaUsuarios");

console.log(campoNome.value);

//Eventos
/*formulario.addEventListener("submit", function(e) {

    e.preventDefault();

    mensagem.textContent = "";

    //Capturando os dados enviados
    console.log("Formulario enviado");
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const idade = Number(campoIdade.value);

    if(nome === ""){
        
        mensagem.textContent = "Informe o nome.";
        mensagem.className = "erro";

        return;
    }

    if( nome.length < 3 ){
        mensagem.textContent = "O nome deve possuir pelo menos 3 caracteres";
        mensagem.className = "erro";

        return;
    }

    if( !email.includes("@") ){
        mensagem.textContent = "Informe um e-mail válido";
        mensagem.className = "erro";

        return;
    }

    if( idade < 18 ){
        mensagem.textContent = "O usuário precisa ter pelo menos"
            + "18 anos";
        mensagem.className = "erro";

        return;
    }

});*/

const usuarios = [];


function cadastrarUsuario(e) {

    e.preventDefault();

    mensagem.textContent = "";

    //Capturando os dados enviados
    console.log("Formulario enviado");
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const idade = Number(campoIdade.value);

    if(nome === ""){
        
        mensagem.textContent = "Informe o nome.";
        mensagem.className = "erro";

        return;
    }

    if( nome.length < 3 ){
        mensagem.textContent = "O nome deve possuir pelo menos 3 caracteres";
        mensagem.className = "erro";

        return;
    }

    if( !email.includes("@") ){
        mensagem.textContent = "Informe um e-mail válido";
        mensagem.className = "erro";

        return;
    }

    if( idade < 18 ){
        mensagem.textContent = "O usuário precisa ter pelo menos"
            + "18 anos";
        mensagem.className = "erro";

        return;
    }

    //objetos => JSON stringfy
    const usuario = {
        nome: nome,
        email: email,
        idade: idade
    };

    usuarios.push(usuario);

    listarUsuarios();
}

formulario.addEventListener("submit",cadastrarUsuario);

function listarUsuarios(){
    listaUsuarios.innerHTML = "";
    
    usuarios.forEach(function(usuario){
        const item = document.createElement("li");

        item.textContent = `${usuario.nome} - ${usuario.email}`;

        listaUsuarios.appendChild(item);
    });
}

