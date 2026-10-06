let nom = "Ana";
let Nom = "Danile";





//les constat son variables que no canvien

const G = 9.8;
const Pi = 3.14

nom = "pepe" ;

function saluda(){
 let valor =document.getElementById("campNom").value;
 document.getElementById("resultat").innerHTML ="hola, "+ valor; 
}




function comprovaLogin() {
let usuari =document.getElementById("usuari").value;
let pasword =document.getElementById("password").value;
/*
if (usuari == "admin" && pasword == "1234"){
    alert("sesió iniciada")
}
else{
    alert("usuari o contraseña incorecta")
}
    */
if (usuari != "admin"){
 alert("usuari incorecte")
}
if (pasword != "password"){
 alert("contraseña incorecte")
}
if (usuari != "usuari" && pasword != "pasword"){
    alert("las dos cosas mal tonto")
}
}



function CalcularPrecio() {
    const precio = document.getElementById("precio").value;
    const radioSi= document.getElementById("residentesi").checked;
    const radioNo= document.getElementById("residenteno").checked;
    const FaNuGen= document.getElementById("famnumgen").checked;
    const FaNuEsp= document.getElementById("famnumesp").checked;
    const FaNor= document.getElementById("famnor").checked;

   if (radioSi == true) {
        let preciofinal= precio*0.25;
   } 
   else if (radioNo == true)  {
        let preciofinal = precio;
   } 
   else if ( radioNo == false , radioSi == false ){
        alert("NO HAS SELECIONADO SI ERES RESIDENE O NO");
   }
   else if (FaNuGen == true) {
        let preciofinal = precio*0.25;

   } 
   else if (FaNuEsp == true)  {
        let preciofinal = precio*0.50;

   } 
   else if (FaNor= true){
        alert (preciofinal)

   }

}
