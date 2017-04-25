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
}
