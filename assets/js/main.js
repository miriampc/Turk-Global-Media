var docFragment=document.createDocumentFragment();

window.addEventListener('load',function(){
  var grid=document.getElementById('grid');
  var slide=document.getElementById('slide');

//creando elemntos del grid
  figures.gridImg.forEach(function(e,i){
    var figure=document.createElement('figure');
    var image=document.createElement('img');
    var caption=document.createElement('figcaption');
    var spanName=document.createElement('span');
    figure.setAttribute("class","image-novel");
    image.setAttribute("id","novel"+i);
    image.src=e.src+i+".jpg";
    image.setAttribute("alt",e.alt);
    caption.setAttribute("class",'novel-name');
    figure.appendChild(image);
    spanName.appendChild(document.createTextNode(e.alt));
    caption.appendChild(spanName);
    figure.appendChild(caption);
    docFragment.appendChild(figure);
    grid.appendChild(docFragment);

    figure.addEventListener('click',function(event){
      createReproductor(i);
      event.preventDefault();
      document.getElementsByClassName('reproductor')[0].classList.add("show");
      document.getElementById('srcvideo').setAttribute("src",e.video+i+".mp4");

      //Evento onpause
      document.getElementById('video'+i).onpause=function(){
        creaMesageVideo();
      }
      //Evento onplay
      document.getElementById('video'+i).onplay=function(){
        document.getElementById('reproductor').removeChild(document.getElementById('mensaje-video'));
      }
      //evento cerrar modal
      document.getElementById('close-reproductor').addEventListener("click",function(){
        document.getElementsByClassName('reproductor')[0].classList.remove("show");
        document.getElementById('reproductor').removeChild(document.getElementById('video'+i));
      });
    });

  });

  slides.slideImg.forEach(function(e,id){
    createSlide(e,id);
  });
  showSlide(1);
  document.getElementById('previus').addEventListener('click',function(e){
      e.preventDefault();
      plusSlide(-1);
  });
  document.getElementById('next').addEventListener('click',function(e){
    e.preventDefault();
      plusSlide(1);
  });

  //eventos
  //----mouseover
  document.getElementsByName('search')[0].addEventListener('mouseover',function(){
    document.getElementsByName('search')[0].style.width="200px";
    document.getElementsByName('search')[0].focus();
  });
  //----blur
  document.getElementsByName('search')[0].addEventListener('blur',function(){
    document.getElementsByName('search')[0].style.width="100px";
  });
  //----keydown



});

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

function createButtonShow(figure){
    var button=document.createElement('button');
    button.setAttribute("id",'button-show');
    button.setAttribute("class",'button-show');
    button.appendChild(document.createTextNode("Ver ahora"));
    figure.appendChild(button);
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
