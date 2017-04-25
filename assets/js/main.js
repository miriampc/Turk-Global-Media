window.addEventListener('load',function(){
  var docFragment=document.createDocumentFragment();
  var grid=document.getElementById('grid');

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

  
});
