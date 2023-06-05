nome = document.querySelector('#nome');
altura = document.querySelector('#altura');
peso = document.querySelector('#peso');
botao = document.querySelector('#botao');

botao.addEventListener('click', function () {
    if (nome.value == '' || altura.value == '' || peso.value == '') {
        alert('Preencha todos os campos');
        return;
    }
    if (altura.value < 1 || altura.value > 2.5) {
        alert('Altura inválida');
        return;
    }
    if (peso.value < 1 || peso.value > 500) {
        alert('Peso inválido');
        return;
    }
    resultado = document.querySelector('#resultado');
    imc = peso.value / (altura.value * altura.value);

    if (imc < 18.5) classificacao = 'baixo';
    else if (imc < 25) classificacao = 'médio';
    else if (imc < 30) classificacao = 'aumentado';
    else if (imc < 35) classificacao = 'moderado';
    else if (imc < 40) classificacao = 'grave';
    else if (imc >= 40) classificacao = 'muito grave';

    resultado.innerHTML = nome.value + ' seu IMC é ' + imc.toFixed(2) + ` e você está na classificação ${classificacao}`
})