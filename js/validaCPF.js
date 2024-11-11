const input = document.querySelector('#cpf')

input.addEventListener('keypress', () => {
    let inputlength = input.value.length
    if (inputlength === 3) {
        input.value += '.'    
    }
    if (inputlength === 7) {
        input.value += '.'
    }
    if (inputlength === 11) {
        input.value += '-'
    }
    if (inputlength === 12) {
        input.value += '-'
    }
}) 

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    strCPF = strCPF.replace(/[^\d]+/g, ''); // Remove pontos e traço apenas para validação

    if (strCPF == "00000000000" || strCPF.length !== 11) return false;

    for (var i = 1; i <= 9; i++) Soma += parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma += parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;

    return true;
}

function validarCPF() {
    var strCPF = document.getElementById("cpf").value;
    if (!TestaCPF(strCPF)) {
        alert("CPF inválido. Por favor, insira um CPF válido.");
        return false; // Impede o envio do formulário
    }
    return true; // CPF é válido, permite o envio do formulário
}

function validarCPF(event) {
    event.preventDefault();
    var strCPF = document.getElementById("cpf").value;
    if (!TestaCPF(strCPF)) {
        alert("CPF Invalido. Por favor digite novamente");
        document.getElementById("cpf").focus();
        return false;
    }
    alert("Registro criado com sucesso. Seja bem-vindo a SOME!")
    window.location.href = "shop.html";
    return true;
}