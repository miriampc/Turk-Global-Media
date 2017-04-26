var directory="assets/images/novelas/novel-";
var videoDirectory="assets/media/video";
var gridImg=[{src:directory, alt:"Sila",sinoptic:"",video:videoDirectory},
             {src:directory, alt:"Fatmagul",sinoptic:"",video:videoDirectory},
             {src:directory, alt:"Medcezir",sinoptic:"",video:videoDirectory},
             {src:directory, alt:"Amor Prohibido",sinoptic:"",video:videoDirectory},
             {src:directory, alt:"Kozem",sinoptic:"",video:videoDirectory},
             {src:directory, alt:"Las mil y una noches",sinoptic:"",video:videoDirectory},
             {src:directory, alt:"El secreto de Feriha",sinoptic:"",video:videoDirectory},
             {src:directory, alt:"Anne",sinoptic:"",video:videoDirectory}];


var slideImg=[{src:directory, alt:"Fatmagul",tittle:"Que culpa tiene Fatmagul",file:".jpg"},
              {src:directory, alt:"Feriha",tittle:"El Secreto de Feriha",file:".jpg"},
              {src:directory, alt:"Milyunanoche",tittle:"Las Mil y Una Noche",file:".jpg"},
              {src:directory, alt:"Amorprohibido",tittle:"Amor Prohibido",file:".jpg"},
              {src:directory, alt:"Sila",tittle:"Sila",file:".jpg"},
              {src:directory, alt:"Anne",tittle:"Anne",file:".jpg"},
              {src:directory, alt:"Medcezir",tittle:"Medcezir",file:".jpg"},
              {src:directory, alt:"Kosem",tittle:"Kosem",file:".png"}];

function GridSection(figure){
   this.gridImg=figure;
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

var figures=new GridSection(gridImg);
var slides=new SlideSection(slideImg);
