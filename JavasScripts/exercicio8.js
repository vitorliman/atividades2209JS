/*
8. Crie duas funções para autenticação de acesso:
a) validarSenha(senha): verifica se a senha tem pelo menos 6 caracteres.
b) autenticarUsuario(usuario, senha): verifica a senha e informa se o
acesso foi permitido ou não.

Entrada: Usuario e senha.

Processamento: Verificar a quantidade de caracteres da senha e depois
usar esse resultado para decidir se o usuario pode entrar.

Saida: Mostrar se o acesso foi concedido ou se a senha é muito curta.

Eu achei essa questão média, porque eu não sabia muito bem como verificar
a quantidade de caracteres de uma senha. Depois que descobri que dava
para usar o length, ficou mais facil de entender. Meu raciocinio foi
criar uma função para pegar os dados, outra para verificar a senha e
uma ultima para mostrar o resultado.
*/

function pegarSenha() {
    let senha = prompt("Digite sua senha:")

    return senha
}

function pegarUsuario() {
    let usuario = prompt("Digite seu usuario:")

    return usuario
}

function validarSenha(senha) {
    if (senha.length >= 6) {
        return true
    } else {
        return false
    }
}

function autenticarUsuario(usuario, senha) {
    if (validarSenha(senha)) {
        return `Acesso concedido para ${usuario}`
    } else {
        return `Senha muito curta para o usuario ${usuario}`
    }
}

function mostrarAcesso(mensagem) {
    alert(mensagem)
}

let senha = pegarSenha()
let usuario = pegarUsuario()

let resultado = autenticarUsuario(usuario, senha)

mostrarAcesso(resultado)