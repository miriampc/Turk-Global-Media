var slide=document.getElementById('slide');

function createSlide(e,id){
  var figure=document.createElement('figure');
  var image=document.createElement('img');
  var caption=document.createElement('figcaption');
  var spanName=document.createElement('span');
  figure.setAttribute("class","figure-slide");
  image.src=e.src+e.alt+id+e.file;
  image.setAttribute("alt",e.alt);
  caption.setAttribute("class",'novel-name');
  figure.appendChild(image);
  spanName.appendChild(document.createTextNode(e.tittle));
  caption.appendChild(spanName);
  figure.appendChild(caption);
  docFragment.appendChild(figure);
  slide.appendChild(docFragment);
}

var slideIndex = 1;

function plusSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(index){
   var slide = document.getElementsByClassName("figure-slide");
   if (index > slide.length) {slideIndex = 1}
   if (index < 1) {slideIndex = slide.length}
   for (var i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
   }
   slide[slideIndex-1].style.display = "block";
   //setTimeout(showSlide, 2000);
}

function createReproductor(id){
  var video=document.createElement('video');
  var source=document.createElement('source');
  source.id="srcvideo";
  source.src="assets/media/video"+id+".mp4";
  source.type="video/mp4";
  video.setAttribute("id",'video'+id);
  video.setAttribute("controls",'');
  video.setAttribute("autoplay",'');
  video.appendChild(source);
  document.getElementById('reproductor').appendChild(video);
}

function creaMesageVideo(){
  var message=document.createElement('p');
  message.appendChild(document.createTextNode("Sigue disfrutando de tu novela turca favorita! Ponle PLAY"));
  message.setAttribute("id",'mensaje-video');
  document.getElementById("reproductor").appendChild(message);
}

//Crea tooltip
var divBox=document.getElementsByClassName('input-box');
document.getElementById("name-alert").classList.add("tooltip");
document.getElementById("email-alert").classList.add("tooltip");
document.getElementById("password-alert").classList.add("tooltip");

function ValidateForm(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var letter = /[A-Z]{1,}[a-z]+/ ;
  var mail =/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]$/ ;

  if(name != ""){
		if(!name.match(letter)){
			printClass("name-alert");
			showMessage("name-alert","Solo se aceptan letras ,el 1° Caracter debe estar en Mayúscula");
      removeChild();
		}
	} else {
		printClass("name-alert");
	 	showMessage("name-alert","Debe ingresar su nombre");
    removeChild();
	}

  if (email  != "") {
   		if(!email.match(mail)){
   			printClass("email-alert");
    		showMessage("email-alert","El correo debe de tener el siguiente dominio: \n Sign in xxxx@yyyyy.zzzz");
        removeChild();
 		 }
  	} else {
  	printClass("email-alert");
		showMessage("email-alert","Debe ingresar su correo");
    removeChild();
	}

  if (password != "" ){
 		if(password.length < 7 || password == "password" || password == "123456" || password == "098754"){
   			printClass("password-alert");
   			showMessage("password-alert"," La contraseña debe tener al menos 6 digitos, \n y no pueden ser 123456 \n o 098754");
        removeChild();
  		}
  	}else {
  		printClass("password-alert");
  		showMessage("password-alert","Debe ingresar su contraseña");
      removeChild();
  	}

}

function showMessage(element,message) {
  var e = document.getElementById(element);
  e.appendChild(document.createTextNode(""));
  e.appendChild(document.createTextNode(message));
}

function printClass(clase){
	// document.getElementById(clase).classList.remove("tooltip");
	document.getElementById(clase).style.display="block";
}

function removeTooltip(){
   var tool=document.getElementsByClassName('tooltip');
   for (var i = 0; i < tool.length; i++) {
     tool[i].style.display="none";
   }
}

for (var i = 0; i < divBox.length; i++) {
  divBox[i].onblur=ValidateForm;
}
