var directory="assets/images/novels/novel-";
var videoDirectory="assets/media/video";
var allNovels=[{src:directory, alt:"Sila",sinoptic:"",video:videoDirectory},
               {src:directory, alt:"Fatmagul",sinoptic:"",video:videoDirectory},
               {src:directory, alt:"El Sultan",sinoptic:"",video:videoDirectory},
               {src:directory, alt:"Amor Prohibido",sinoptic:"",video:videoDirectory},
               {src:directory, alt:"Ezel",sinoptic:"",video:videoDirectory},
               {src:directory, alt:"Las mil y una noches",sinoptic:"",video:videoDirectory},
               {src:directory, alt:"El secreto de Feriha",sinoptic:"",video:videoDirectory},
               {src:directory, alt:"Tormenta de Pasiones",sinoptic:"",video:videoDirectory}];


var slideImg=[{src:directory, alt:"feriha",sinoptic:"",file:".jpg"},
              {src:directory, alt:"fatmagul",sinoptic:"",file:".png"},
              {src:directory, alt:"milyunanoche",sinoptic:"",file:".jpg"}];

function GridSection(figure){
   this.allNovels=figure;
   this.addImages=function(){
     this.figures.push({
       directory:directory,
       alt:alt,
       sinoptic:sinoptic
     })
   };
}

function SlideSection(figure){
   this.slideImg=figure;
   this.addImages=function(){
     this.figures.push({
       directory:directory,
       alt:alt,
       sinoptic:sinoptic,
       file:file
     })
   };
}

var figures=new GridSection(allNovels);
var slides=new SlideSection(slideImg);
