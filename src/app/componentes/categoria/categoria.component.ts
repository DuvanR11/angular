import { CategoriaService } from './../../servicios/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ICategoria } from 'src/app/models/categoria.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  public frmCategoria !: FormGroup;
  public categoria !: ICategoria;
  public mensaje:string = '';
  listaCategorias:any;

  constructor(private location : Location, private CategoriaSvc :CategoriaService ) { }

  obtenerCategorias(){
    this.CategoriaSvc.litarCategorias().subscribe(respuesta=>{
      console.log(respuesta);
      this.listaCategorias=respuesta
    }, error=>{
      console.log(error);
    })
  }

  public agregarCategoria = (frmCategoriaValue: {txtCategoria: string;})=>{
    // Validar formulario
    if(this.frmCategoria.valid){
      this.categoria = new ICategoria(frmCategoriaValue.txtCategoria.valueOf());
    }
    this.CategoriaSvc.agregarCategoria(this.categoria).subscribe(respuesta=>{
      console.log(respuesta)
      this.mensaje = "Categoria agrgada"
    }, error=>{
      console.log(error)
      this.mensaje = "Categoria fallando"
      this.frmCategoria.reset();
    })
  }

  ngOnInit(): void {
    this.frmCategoria = new FormGroup({
      txtCategoria: new FormControl( '', [ Validators.required, Validators.maxLength(60)])
    })
  }

}
