import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit{
  @Input() noticia:Array<any> | any;
  //public noticiaSelec:any={urlToImage:undefined,url:undefined,title:undefined,description:undefined,sourse:undefined};
  
  ///
  constructor(){
    this.noticia = new Array();
  }
  ///
  ngOnInit(): void {
    console.log(this.noticia);
  }
  
}
