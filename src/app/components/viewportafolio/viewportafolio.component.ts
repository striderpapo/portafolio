import { Component, OnInit ,HostListener } from '@angular/core';

@Component({
  selector: 'app-viewportafolio',
  templateUrl: './viewportafolio.component.html',
  styleUrls: ['./viewportafolio.component.css']
})
export class ViewportafolioComponent implements OnInit {
  isOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.moveProgressbar();
    console.log(window.addEventListener)
    if (this.isMobile() ) {
      this.isOpen = false;
    }else{
      this.isOpen = true;
    }
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
  default:
    // code block
}

    }
}
ofset(){
  const d = document.getElementById("div1")!;
  const topPos = d.offsetTop;
  console.log(topPos)
  if (topPos > 10) {
    // object offset is more
    // than 10 pixels from its parent
   // alert("que haces")
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
}
