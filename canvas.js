function desenharCanvas() {
  tela.lineWidth=8     /*LARGURA DA LINHA*/
  tela.lineCap="round"
  tela.lineJoin="round"     /*LIGAMENTO DAS LINHAS*/
  tela.fillStyle= "#F3F5FC"     /*CORES DE PREENCHIMENTO*/
  tela.strokeStyle = "#0A3871"     /*COR DA BORDA */
  tela.fillRect(0,0,1200,800)     /*TAMANHO DO RETANGULO ONDE FARÁ O DESENHO */
  tela.beginPath();     /*INICIA O CAMINHO DO DESENHO */
  tela.moveTo(650,500)
  tela.lineTo(900,500)     /*LUGAR ONDE DESLOCA A LINHA */
  tela.stroke()  /*BORDA DOS ELEMENTOS, JA FOI DEFINIDO ACIMA */
  tela.closePath()
}

function desenharLinhas() {
  tela.lineWidth=6
  tela.lineCap="round"
  tela.lineJoin="round"
  tela.strokeStyle = "#0A3871"
  tela.beginPath()
  var largura=600/palavraSecreta.length
  for (var i=0; i<palavraSecreta.length; i++){
    tela.moveTo(500+(largura*i),640)
    tela.lineTo(550+(largura*i),640)
  }
  tela.stroke()
  tela.closePath()
}

function escreverLetraCorreta(index){
  tela.font = "bold 52px Inter"
  tela.lineCap = "round" //jeito da borda da linha = arredondada
  tela.fillStyle = "#0A3871"
  tela.lineWidth = 6
  var largura = 600/palavraSecreta.length  //600 é o tamanho da tela, dividir pra ficar bonita a palavra
  tela.fillText(palavraSecreta[index], 505 + (largura * index), 620)
}

function escreverLetraIncorreta(letra, erros){
  tela.font = "bold 40px Inter"
  tela.lineCap = "round"
  tela.lineJoin = "round"
  tela.fillStyle = "#0A3871"
  tela.lineWidth = 6
  tela.fillText(letra, 535 + (40 * (10 - erros)), 720, 40)
}


//PARTE NOVA DO CÓDIGO

function desenharForca(pontos) {
  tela.lineWidth=8
  tela.lineCap="round"
  tela.lineJoin="round"
  tela.strokeStyle = "#0A3871"
  if(pontos===8){
  //poste lateral
  tela.moveTo(700,500)
  tela.lineTo(700,100)
  }
  if(pontos===7){//teto 
  tela.moveTo(850,100)
  tela.lineTo(700,100)
  }
  if(pontos===6){//corda
  tela.moveTo(850,100)
  tela.lineTo(850,171)
  }
  if(pontos===5){//para cara
  tela.moveTo(900,230)
  tela.arc(850,230,50,0,Math.PI*2)
  }
  if(pontos===4){//para corpo
  tela.moveTo(850,389)
  tela.lineTo(850,289)
  }
  if(pontos===3){//para perna esquerda
  tela.moveTo(850,389)
  tela.lineTo(800,450)
  }
  if(pontos===2){//para perna direita
  tela.moveTo(850,389)
  tela.lineTo(890,450)
  }
  if(pontos===1){//para mão izquerda
  tela.moveTo(850,330)
  tela.lineTo(800,389)
  }
  if(pontos===0){//para mão direita
  tela.moveTo(850,330)
  tela.lineTo(890,389)
  }
  tela.stroke()
  tela.closePath()
}