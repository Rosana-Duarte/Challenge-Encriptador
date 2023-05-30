const textArea = document.querySelector (".text-area");
const mensagem = document.querySelector (".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar () {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
} 

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase ();
    
    for( let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1]);   }
    }
    return stringEncriptada;
}

function btnDesencriptar () {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
} 

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase ();
    
    for( let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);  }
    }
    return stringDesencriptada;
}

function btnCopiar() {
	var copyText = document.querySelector(".mensagem");
	var textToCopy = copyText.value;
  
	navigator.clipboard.writeText(textToCopy);
  } 

var mensagemTextArea = document.querySelector(".mensagem");

function validarInput(input) {
	input.value = input.value.replace(/[A-Za-z0-9]/g, '');
  }
  
  const textoInput = document.querySelector('.texto');

  textoInput.addEventListener('input', function (event) {
	const inputValue = event.target.value;
  
	const normalizedValue = inputValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	
	event.target.value = normalizedValue;
  });
  