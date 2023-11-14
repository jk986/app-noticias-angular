import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CATEGORIAS } from 'src/app/data/data';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  ///
  public categorias:Array<any>;
  public categoriaSelec:any;
  ///
  constructor(private _noticiasService:NoticiasService){
    this.categorias = new Array();
  }
  ///
  ngOnInit(): void {
    // Treamos las categorias admitidas
    this.categorias = CATEGORIAS.map(categoria=>categoria);
  }
  // Establecemos la categoria y consulamos la API
  onSubmit= () =>{
    // Validacion del formulario
    if(this.categoriaSelec!=undefined){
      // Enviamos la categoria al servicio 
      this._noticiasService.setCategoria(this.categoriaSelec);
      // consultamos la API 
      this.consultarApi();
    }
  };

  async consultarApi(){
    // Consultamos la API usando el servicio noticias.service
    await this._noticiasService.consultarApi();
  }

}
