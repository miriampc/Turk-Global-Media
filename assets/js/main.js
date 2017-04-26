var docFragment=document.createDocumentFragment();

window.addEventListener('load',function(){
  var grid=document.getElementById('grid');

//creando elemntos del grid
  figures.gridImg.forEach(function(e,i){
    var figure=document.createElement('figure');
    var image=document.createElement('img');
    var caption=document.createElement('figcaption');
    var spanName=document.createElement('span');
    var spanVer=document.createElement('span');
    figure.setAttribute("class","image-novel");
    image.setAttribute("id","novel"+i);
    image.src=e.src+i+".jpg";
    image.setAttribute("alt",e.alt);
    caption.setAttribute("class",'novel-name');
    spanVer.setAttribute("class",'ver-video');
    figure.appendChild(image);
    spanName.appendChild(document.createTextNode(e.alt));
    spanVer.appendChild(document.createTextNode("Ver video"));
    caption.appendChild(spanName);
    figure.appendChild(spanVer);
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

  //evento mouseover
  document.getElementsByName('search')[0].addEventListener('mouseover',function(){
    document.getElementsByName('search')[0].style.width="200px";
    document.getElementsByName('search')[0].focus();
  });

  //evento blur
  document.getElementsByName('search')[0].addEventListener('blur',function(){
    document.getElementsByName('search')[0].style.width="100px";
  });

  document.getElementById('hamburguer').onclick=function(){
    document.getElementsByClassName('menu')[0].classList.toggle('show');
    document.getElementsByClassName('icon-menu')[0].classList.toggle('hamburguer-hover');
    var li=document.getElementsByTagName('li');
    for (var i = 0; i < li.length; i++) {
      document.getElementsByClassName('enlace')[i].onclick=function(){
        document.getElementsByClassName('menu')[0].classList.remove('show');
        document.getElementsByClassName('icon-menu')[0].classList.toggle('hamburguer-hover');
      }
    }
  }
removeTooltip();
  document.getElementById("form").onsubmit = function(e){
       e.preventDefault();
       ValidateForm();
   }
});
