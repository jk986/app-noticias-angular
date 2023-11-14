import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent implements OnInit{
  ///
  public listNoticias:Array<any>;
  public paginasTotales:number;
  ///
  constructor(private _noticiasService:NoticiasService){
    this.listNoticias = new Array();
    this.paginasTotales = 1;
  }
  ///
  ngOnInit(): void {
    // traemos las noticias
    this.traerNoticias();
  }
  
  // Nos suscribimos al EventEmitter del servicio que se declaro con @Output
  // y traemos las noticias que nos devuelva el observable de noticiasEmitter
  traerNoticias(){
    this._noticiasService.noticiasEmitter.subscribe(data=>{
      this.listNoticias = data.noticias;
      this.paginasTotales = data.pages;
      //console.log(this.listNoticias);
    });
  }

  //funcion para cambiar pagina usanso el servicio
  cambiarPagina(ev:any){
    this._noticiasService.cambiarPagina(ev.pageIndex + 1);
    console.log(this.listNoticias);
  }
  }
