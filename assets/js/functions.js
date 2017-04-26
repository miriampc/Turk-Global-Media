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
