const inputCPF = document.querySelector('#cpf');

    inputCPF.addEventListener('input', () => {
        let valor = inputCPF.value.replace(/\D/g, ''); // Remove tudo que não for número
        if (valor.length <= 3) {
            inputCPF.value = valor;
        } else if (valor.length <= 6) {
            inputCPF.value = valor.replace(/(\d{3})(\d{1,})/, '$1.$2');
        } else if (valor.length <= 9) {
            inputCPF.value = valor.replace(/(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3');
        } else if (valor.length <= 11) {
            inputCPF.value = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3-$4');
        }
    });

    // Função para validar CPF
    function TestaCPF(strCPF) {
        var Soma = 0;
        var Resto;
        strCPF = strCPF.replace(/[^\d]+/g, ''); // Remove pontos e traços apenas para validação

        if (strCPF == "00000000000" || strCPF.length !== 11) return false;

        for (var i = 1; i <= 9; i++) Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10))) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) return false;

        return true;
    }

    // Função para validar o formulário
    function validarFormulario(event) {
        event.preventDefault(); // Impede o envio até validar

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("password").value;
        const cpf = document.getElementById("cpf").value;

        // Verificar se os campos obrigatórios foram preenchidos
        if (!nome || !email || !senha || !cpf) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return false;
        }

        // Validar o CPF
        if (!TestaCPF(cpf)) {
            alert("CPF inválido. Por favor, insira um CPF válido.");
            document.getElementById("cpf").focus();
            return false;
        }

        // Se tudo estiver correto, o formulário é enviado
        alert("Registro criado com sucesso. Seja bem-vindo a SOME!");

        // Redirecionar para a página 'shop.html' após sucesso
        window.location.href = "shop.html"; // Redireciona para a página shop.html

        // Para enviar o formulário ao servidor, use:
        // document.getElementById("registrationForm").submit(); // Se for enviar para o back-end

        return true;
    }