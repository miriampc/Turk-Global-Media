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
    document.getElementById('reproductor').removeChild(document.getElementById('video'+i));
  });*/
  var suscripcion = document.getElementsByClassName("suscripcion")[0];
  document.getElementById("suscribete").onclick = function(){
    suscripcion.style.display = "block";
  }

  document.getElementById("send").onclick = function(){
    suscripcion.style.display = "none";
  }
