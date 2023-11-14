import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  ///
  public categoria:any;
  public noticias:Array<any>;
   // Con output creamos el nuevo EventEmitter. De este objeto obtendremos los cambios.
  @Output() noticiasEmitter:EventEmitter<any> = new EventEmitter();


  constructor() {
    this.noticias = new Array();
     }
   // Cambiamos el atributo this.categoria por el sseleionado el formulario.component
  setCategoria=(data:any)=>{this.categoria=data};

  //setPagina=(numeroPagina:any)=>{this.pagina=numeroPagina,console.log(numeroPagina)};
  
  // Consultamos la API con axios
  async consultarApi(page:any = 1){
    let paginasTotales = 0;
    let resultadosTotales;
    
    const URL = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${this.categoria}&apiKey=${environment.API_KEY}`;
    const { data } = await axios(URL);
    
    // Cambiamos el atributo this.noticias y llamamos a traerNoticias()
    this.noticias = data.articles;
    resultadosTotales = data.totalResults; // resutados totales
    paginasTotales = Math.ceil(resultadosTotales/20); //para el redondeo hacia arriba
    this.enviarNoticias(this.noticias,resultadosTotales);
    return;
    console.log(paginasTotales);
  };
  
  // Emitimos los los cambios de this.noticias
  private enviarNoticias(noticiasApi:any,paginas:any) {
    this.noticiasEmitter.emit({noticias:noticiasApi,pages:paginas});
  }
  /**Funcion para cambiar de página 
   * aun esta inconpleta....
   *
  */
  cambiarPagina(page:any){
    this.consultarApi(page);
  }

}
