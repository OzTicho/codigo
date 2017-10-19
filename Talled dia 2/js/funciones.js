//$(docuument).ready(function)(){
  //var sonido = docuument.getElementById("musica");
//}


function carga_sonido(){

  document.getElementById('divContenedor').innerHTML;
}

var jugador=false;
function validar(miBoton){
var valorBoboton=miBoton.innerHTML;

if(valorBoboton == ""){

  miBoton.innerHTML=(jugador)?"O":"X";
  jugador=!jugador;
  validarGanador();
}else  {

  alert("Error");

}
  }
function validarGanador(){

  var b1=document.getElementById('B1').innerHTML;
  var b2=document.getElementById('B2').innerHTML;
  var b3=document.getElementById('B3').innerHTML;
  var b4=document.getElementById('B4').innerHTML;
  var b5=document.getElementById('B5').innerHTML;
  var b6=document.getElementById('B6').innerHTML;
  var b7=document.getElementById('B7').innerHTML;
  var b8=document.getElementById('B8').innerHTML;
  var b9=document.getElementById('B9').innerHTML;

var ganador=false;
    //Filas
  if((b1!= ""&& b2!="" && b3 !="")&&b1 == b2 && b1 == b3){
  ganador=true;
  }else if ((b4!=""&&b5!=""&&b6!="") && b4 == b5 && b4==b6) {
  ganador=true;
  }else if ((b7!=""&&b8!=""&&b9!="") && b7 == b8 && b7==b9) {
  ganador=true;

    //Columnas
  }else if ((b1 !=""&&b4!=""&&b7!="") && b1 == b4 && b1==b7) {
  ganador=true;
  }else if ((b2 !=""&&b5!=""&&b8!="") && b2 == b5 && b2==b8) {
  ganador=true;
  }else if ((b3!=""&&b6!=""&&b9!="") && b3 == b6 && b3==b9) {
  ganador=true;

    //Diagonales
  }else if ((b1 !=""&&b5!=""&&b9!="") && b1 == b5 && b1==b9) {
  ganador=true;
  }else if ((b7 !=""&&b5!=""&&b3!="") && b7 == b5 && b7==b3) {
  ganador=true;

  }
  if(ganador)
  alert(((jugador)? "Esta Partida la Ganao el jugador X!!  !FELICIDADES¡  ":"Esta Partida la Gano el jugador O!!  !FELICIDADES¡  "));
}
