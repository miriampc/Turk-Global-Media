var directory="assets/images/novels/novel-";
var allNovels=[{src:directory, alt:"Sila",sinoptic:""},
               {src:directory, alt:"Fatmagul",sinoptic:""},
               {src:directory, alt:"El Sultan",sinoptic:""},
               {src:directory, alt:"Amor Prohibido",sinoptic:""},
               {src:directory, alt:"Ezel",sinoptic:""},
               {src:directory, alt:"Las mil y una noches",sinoptic:""},
               {src:directory, alt:"El secreto de Feriha",sinoptic:""},
               {src:directory, alt:"Tormenta de Pasiones",sinoptic:""}];


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
