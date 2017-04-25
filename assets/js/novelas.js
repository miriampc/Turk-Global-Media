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


var slideImg=[{src:directory, alt:"Feriha",tittle:"Feriha",file:".jpg"},
              {src:directory, alt:"Fatmagul",tittle:"Que culpa tiene Fatmagul",file:".jpg"},
              {src:directory, alt:"Milyunanoche",tittle:"Las Mil y Una Noche",file:".jpg"},
              {src:directory, alt:"Amorprohibido",tittle:"Amor Prohibido",file:".jpg"},
              {src:directory, alt:"Sila",tittle:"Sila",file:".jpg"},
              {src:directory, alt:"Anne",tittle:"Anne",file:".jpg"},
              {src:directory, alt:"Medcezir",tittle:"Medcezir",file:".jpg"},
              {src:directory, alt:"Kosem",tittle:"Kosem",file:".png"}];

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
