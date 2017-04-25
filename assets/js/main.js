window.addEventListener('load',function(){
  var docFragment=document.createDocumentFragment();
  var grid=document.getElementById('grid');
  var slide=document.getElementById('slide');

  figures.allNovels.forEach(function(e,id){
    var figure=document.createElement('figure');
    var image=document.createElement('img');
    var caption=document.createElement('figcaption');
    var spanName=document.createElement('span');
    figure.setAttribute("class","image-novel");
    image.setAttribute("id","novel"+id);
    image.src=e.src+id+".jpeg";
    image.setAttribute("alt",e.alt);
    caption.setAttribute("class",'novel-name');
    figure.appendChild(image);
    spanName.appendChild(document.createTextNode(e.alt));
    caption.appendChild(spanName);
    figure.appendChild(caption);
    docFragment.appendChild(figure);
    grid.appendChild(docFragment);

    figure.onclick=function(event){
      event.preventDefault();
      console.log(e.video+id+".mp4");
      document.getElementsByClassName('reproductor')[0].classList.add("show");
      document.getElementById('video').setAttribute("src","assets/media/video"+id+".mp4");
      document.getElementById('close-reproductor').addEventListener("click",function(){
        document.getElementsByClassName('reproductor')[0].classList.remove("show");
      });
    }

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


});
var docFragment=document.createDocumentFragment();
var slide=document.getElementById('slide');

function createSlide(e,id){
  var figure=document.createElement('figure');
  var image=document.createElement('img');
  var caption=document.createElement('figcaption');
  var spanName=document.createElement('span');
  figure.setAttribute("class","figure-slide");
  //image.setAttribute("id","novel"+id);
  image.src=e.src+e.alt+id+e.file;
  image.setAttribute("alt",e.alt);
  caption.setAttribute("class",'novel-name');
  figure.appendChild(image);
  spanName.appendChild(document.createTextNode(e.sinoptic));
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

function createButtonShow(figure,video){
  var button=document.createElement('button');
  button.setAttribute("id",'button-show');
  button.setAttribute("class",'button-show');
  button.appendChild(document.createTextNode("Ver ahora"));
  figure.appendChild(button);
  console.log(video);

  figure.onclick=function(e){
    e.preventDefault();
    console.log(video);
    console.log(document.getElementById('video').children[0]);
    document.getElementById('video').children[0].setAttribute("src",video);
    console.log(document.getElementById('video').children[0]);
    document.getElementsByClassName('reproductor')[0].style.display="block";

    //console.log(document.getElementById('video').children[0]);

  }
}
