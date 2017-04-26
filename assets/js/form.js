/*document.getElementById("suscribete").onclick= function(){
  window.open("./assets/form.html")
}*/

//creando form desde js
/*var suscribete = document.getElementById("suscribete");
suscribete.addEventListener('click',function(event){
  createReproductor(i);
  event.preventDefault();
  document.getElementsByClassName('reproductor')[0].classList.add("show");
  document.getElementById('srcvideo').setAttribute("src",e.video+i+".mp4");

  //evento cerrar modal
  document.getElementById('close-reproductor').addEventListener("click",function(){
    document.getElementsByClassName('reproductor')[0].classList.remove("show");
    document.getEleme*/
//  window.onload = function(){
  document.getElementById("form").onsubmit = function(e){
       e.preventDefault();
       console.log("valida");
       ValidateForm();

   }

function ValidateForm(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").vaue;
  var password = document.getElementById("password").value;

  var nameAlert = document.getElementById("name-alert").classList.add("tooltip");
  var emailAlert = document.getElementById("email-alert").classList.add("tooltip");
  var passwordAlert = document.getElementById("password-alert").classList.add("tooltip");

  var letter = /[A-Z]{1,}[a-z]+/ ;
  var mail =/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]$/ ;

  if(name != ""){
		if(!name.match(letter)){
			printClass(nameAlert);
			showMessage(nameAlert,"Solo se aceptan letras ,el 1° Caracter debe estar en Mayúscula");
		}
	} else {
		printClass(nameAlert);
	 	showMessage(nameAlert,"Debe ingresar su nombre");
	}

  if (email  != "") {
   		if(!email.match(mail)){
   			printClass(emailAlert);
    		showMessage(emailAlert,"El correo debe de tener el siguiente dominio: \n Sign in xxxx@yyyyy.zzzz");
 		 }
  	} else {
  		printClass(emailAlert);
		showMessage(emailAlert,"Debe ingresar su correo");
	}

  if (password != "" ){
 		if(password.length < 7 || password == "password" || password == "123456" || password == "098754"){
   			printClass(passwordAlert);
   			showMessage(passwordAlert," La contraseña debe tener al menos 6 digitos, \n y no pueden ser 123456 \n o 098754");
  		}
  	}else {
  		printClass(passwordAlert);
  		showMessage(passwordAlert,"Debe ingresar su contraseña");
  	}
}

printClass(clase){
  clase.style.display="block";
}
