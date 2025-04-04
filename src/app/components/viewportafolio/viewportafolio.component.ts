import { Component, OnInit ,HostListener } from '@angular/core';

@Component({
    selector: 'app-viewportafolio',
    templateUrl: './viewportafolio.component.html',
    styleUrls: ['./viewportafolio.component.css'],
    standalone: false
})
export class ViewportafolioComponent implements OnInit {
  isOpen: boolean = true;
  texts: string[] = ["Primero este texto", "Luego este otro texto", "Finalmente este texto"];
  currentText: string = '';
  index: number = 0;
  typingSpeed: number = 100; // Velocidad de tipeo en milisegundos
  erasingSpeed: number = 50; // Velocidad de borrado en milisegundos
  delayBetweenTexts: number = 500; // Retraso entre textos en milisegundos
  images: string[] = [
    'https://main--portafolioarturogg.netlify.app/assets/img/prograrecortado.jpg',
    'https://main--portafolioarturogg.netlify.app/assets/img/reactrecortado.png',
    'https://main--portafolioarturogg.netlify.app/assets/img/nodeprod.png',
    'https://main--portafolioarturogg.netlify.app/assets/img/angularprod.png',
    'https://main--portafolioarturogg.netlify.app/assets/img/rnprod.png',
  ];
  currentImageIndex: number = 0;
  public spanproyectos:number;
  public tituloTecnologia: string = '';
  public imageseleccionada:string='';
  constructor() {
    this.spanproyectos=0;
    this.tituloTecnologia = '';
   }

  ngOnInit(): void {
    this.moveProgressbar();
    console.log(window.addEventListener)
    if (this.isMobile() ) {
      this.isOpen = false;
    }else{
      this.isOpen = true;
    }
    this.typeText();
    this.startImageSwitch();
  }

moveProgressbar() {
    var elem = Array.from(document.getElementsByClassName("myBar")! as HTMLCollectionOf<HTMLElement>);
    console.log(elem)
    for (const index in elem) {
      console.log(elem[index])
      console.log(typeof index)

      switch(index) {
  case '0':
    var widthAn = 1;
    var idAn = setInterval(frame, 10);
    function frame() {
      if (widthAn >= 90) {
        clearInterval(idAn);
        //i = 0;
      } else {
       // console.log(elem[index], 'color: red')
       // console.log('%c'+widthAn, 'color: blue')
       /*[[redirects]]
  from = "/portafolio/*"
  to = "/portafolio/browser/index.html"
  status = 200*/
        widthAn++;
       // console.log('%c'+widthAn, 'color: pink')
        elem[index].style.width = widthAn + "%";
      }
    }
    break;
  case '1':
    var widthNod = 1;
    var idNod = setInterval(frameNod, 10);
    function frameNod() {
      if (widthNod >= 90) {
        clearInterval(idNod);
        //i = 0;
      } else {
        //console.log(elem[index], 'color: red')
        //console.log('%c'+widthNod, 'color: blue')
        widthNod++;
        //console.log('%c'+widthNod, 'color: pink')
        elem[index].style.width = widthNod + "%";
      }
    }
    break;
     case '2':
    var widthRn = 1;
    var idRn = setInterval(frameRn, 10);
    function frameRn() {
      if (widthRn >= 85) {
        clearInterval(idRn);
        //i = 0;
      } else {
        //console.log(elem[index], 'color: red')
        //console.log('%c'+widthRn, 'color: blue')
        widthRn++;
        //console.log('%c'+widthRn, 'color: pink')
        elem[index].style.width = widthRn + "%";
      }
    }
    break;
     case '3':
    var widthMdb = 1;
    var idMdb = setInterval(frameMdb, 10);
    function frameMdb() {
      if (widthMdb >= 85) {
        clearInterval(idMdb);
        //i = 0;
      } else {
        //console.log(elem[index], 'color: red')
        //console.log('%c'+widthRn, 'color: blue')
        widthMdb++;
        //console.log('%c'+widthRn, 'color: pink')
        elem[index].style.width = widthMdb + "%";
      }
    }
    break;
    case '4':
    var widthMysql = 1;
    var idMysql = setInterval(frameMysql, 10);
    function frameMysql() {
      if (widthMysql >= 80) {
        clearInterval(idMysql);
        //i = 0;
      } else {
        //console.log(elem[index], 'color: red')
        //console.log('%c'+widthRn, 'color: blue')
        widthMysql++;
        //console.log('%c'+widthRn, 'color: pink')
        elem[index].style.width = widthMysql + "%";
      }
    }
    break;
    case '5':
    var widthMysql = 1;
    var idMysql = setInterval(frameReact, 10);
    function frameReact() {
      if (widthMysql >= 80) {
        clearInterval(idMysql);
        //i = 0;
      } else {
        //console.log(elem[index], 'color: red')
        //console.log('%c'+widthRn, 'color: blue')
        widthMysql++;
        //console.log('%c'+widthRn, 'color: pink')
        elem[index].style.width = widthMysql + "%";
      }
    }
    break;
  default:
    // code block
}

    }
}

public navigateToSection(section: string) {
  //window.location.hash = '';
  //window.location.hash = section;
  console.log(document.getElementsByClassName("caja")![0])
  if(section=="caja"){
    document.getElementsByClassName("caja")![0].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  }else{
  document.getElementById(section)!.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest"
  });
}
  if (this.isMobile() ) {
    this.isOpen = false;
  }else{
    this.isOpen = true;
  }
  this.moveProgressbar();
}
toggleMenu() {
  this.isOpen = !this.isOpen;
}
isMobile(): boolean {
  return window.innerWidth <= 600; // Cambia el valor según tu definición de "móvil"
}

// Método para manejar el evento de redimensionamiento de la ventana
@HostListener('window:resize', ['$event'])
onResize(event:any) {
  // Verificar si la pantalla es de tamaño móvil y cerrar el menú si está abierto
  if (this.isMobile() ) {
    this.isOpen = false;
  }else{
    this.isOpen = true;
  }
}

typeText(): void {
  const fullText = this.texts[this.index];
  let charIndex = 0;
  const typeInterval = setInterval(() => {
    if (charIndex < fullText.length) {
      this.currentText += fullText.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typeInterval);
      setTimeout(() => this.eraseText(), this.delayBetweenTexts);
    }
  }, this.typingSpeed);
}

eraseText(): void {
  const eraseInterval = setInterval(() => {
    if (this.currentText.length > 0) {
      this.currentText = this.currentText.substring(0, this.currentText.length - 1);
    } else {
      clearInterval(eraseInterval);
      this.index = (this.index + 1) % this.texts.length;
      setTimeout(() => this.typeText(), this.delayBetweenTexts / 2);
    }
  }, this.erasingSpeed);
}
startImageSwitch(): void {
  setInterval(() => {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }, 4000); // Cambia de imagen cada 3 segundos
}

chaneproyectoimagenes(tipoproyecto:number){

  switch(tipoproyecto) {
    case 1:
      this.tituloTecnologia = 'Angular';
      if(this.spanproyectos==1){
        this.spanproyectos=0
        return
      }
      this.imageseleccionada='https://main--portafolioarturogg.netlify.app/assets/img/angularprod.png';
      this.spanproyectos=1
      break;
    case 2:
      this.tituloTecnologia = 'Node';
      if(this.spanproyectos==2){
        this.spanproyectos=0
        return
      }
      this.imageseleccionada='https://main--portafolioarturogg.netlify.app/assets/img/nodeprod.png',
      this.spanproyectos=2     
      break;
    case 3:
      this.tituloTecnologia = 'React Native';
      if(this.spanproyectos==3){
        this.spanproyectos=0
        return
      }
    this.imageseleccionada='https://main--portafolioarturogg.netlify.app/assets/img/rnprod.png',
      this.spanproyectos=3
      break;
    case 4:
      this.tituloTecnologia = 'React + electronvite';
      if(this.spanproyectos==4){
        this.spanproyectos=0
        return
      }
      
    this.imageseleccionada='https://main--portafolioarturogg.netlify.app/assets/img/reactrecortado.png',
      this.spanproyectos=4
      break;
    default:
      // code block
  }
  setTimeout(() => {
    this.navigateToSection('imagenesProyecto');
  }, 100);
}
}
