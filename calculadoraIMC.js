
const calcular = document.getElementById('calcular');

function operando(){
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
   
     const valorIMC = (peso / (altura * altura)).toFixed(1);

    if(valorIMC < 18.5){
        resultado.textContent = `${valorImc}, Abaixo do Peso`;
    }
    else if(valorIMC >= 18.5 && valorIMC < 25){
        resultado.textContent = `${valorIMC}, Peso Normal`;

    }else if(valorIMC >= 25.0 && valorIMC < 30){
        resultado.textContent = `${valorIMC}, Sobrepeso`;

    }else if(valorIMC >= 30.0 && valorIMC < 35){
        resultado.textContent = `${valorIMC}, Obesidade Grau I`;

    }else if(valorIMC >= 35.0 && valorIMC < 40){
        resultado.textContent = `${valorIMC}, Obesidade Grau II`;

    }else{
        resultado.textContent = `${valorIMC}, Obesidadde Grau III`;

    }
}
  

