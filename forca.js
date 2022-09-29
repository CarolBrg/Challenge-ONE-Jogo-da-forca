var palavras = ['ALURA', 'FORCA', 'HTML', 'ORACLE', 'JAVASCRIPT', 'LOGICA', 'PROGRAMA', 'DESAFIO'];
var tela = document.getElementById('forca').getContext('2d');
var palavraSecreta = "";
var letras = []
var erros = 8

document.getElementById("addPalavraNova").style.display = "none"
document.getElementById("botoes-forca").style.display = "none"

function escolherPalavraSecreta() {
  var palavra = palavras[Math.floor(Math.random() * palavras.length)]
  palavraSecreta = palavra
  return palavra
}

function verificarLetraCerta(key){
  if (!letras.includes(key)){
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
      letras.push(key)
      return false
    }
    else{
      letras.push(key)
      return true
    }
  }
}

function adicionarLetraIncorreta(letra) {
  if (palavraSecreta.indexOf(letra) <= 0) {
    erros -= 1
  }
}
//impede teclas como shift de ser escritas
function verificarLetra(keyCode) {
  if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
}


function iniciarJogo(){
  document.getElementById("home").style.display = "none";
  document.getElementById("botoes-forca").style.display = "block";
  escolherPalavraSecreta()
    
  desenharCanvas()
  desenharLinhas()
  var contadorLetra = 0;
  //onkeydown: quando a tecla for pressionada ele ve a letra
  document.onkeydown =  (e) =>{
    //toUpperCase: deixa a letra maiúscula
    let letra = e.key.toUpperCase()
    if(verificarLetraCerta(letra) && palavraSecreta.includes(letra)) {

      for (var i = 0;i <palavraSecreta.length; i++) {
        if (palavraSecreta[i] === letra) {
          escreverLetraCorreta(i) 
          contadorLetra++
        }
      }
     
    } else{
      var eletra = verificarLetra(e.keyCode)
      if (eletra == true) {
        if (erros >= 0 ) {
          desenharForca(erros)
          escreverLetraIncorreta(letra, erros)
          adicionarLetraIncorreta(letra)
        } else {
          alert("Você perdeu! Fim de jogo.")
          erros = 8
          letras = []
          iniciarJogo();
        }
      }
    
  }
    if (contadorLetra == palavraSecreta.length) {
      alert("Você ganhou, não fez mais que sua obrigação")
      erros = 8
      letras = []
      iniciarJogo();
      
    }
  }
}



/*ADICIONAR PALAVRA*/

function adicionarNovaPalavra(){
  document.getElementById("home").style.display = "none";
  document.getElementById("addPalavraNova").style.display = "block";

  //salvarPalavraNova()//
}

function salvarPalavraNova() {
  var novaPalavra = document.getElementById("input-texto").value;
  if(novaPalavra !== ""){
    palavras.push(novaPalavra.toUpperCase());
    alert("A palavra digitada foi adicionada!")
    document.getElementById("addPalavraNova").style.display = "none";
    iniciarJogo();
  }
  else{
    alert("Nenhuma palavra foi digitada.")
  }
}


function volta() {
  location.reload()
}