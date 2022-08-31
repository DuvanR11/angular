import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { CategoriaService } from './../../servicios/categoria.service';
import { IProducto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ICategoria } from 'src/app/models/categoria.model';
// import { Observable } from 'rxjs';
// import { ICategoria } from 'src/app/models/categoria.model';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public frmProducto!: FormGroup;
  public producto !: IProducto
  public mensaje:string = '';


  public listaCategorias: any;
  constructor(private productoSvc: ProductoService, private categoriaSvc: CategoriaService, private location: Location) { }



  listarCategorias():any {
    this.categoriaSvc.litarCategorias().subscribe((respuesta)=>{
      this.listaCategorias= respuesta
    })
  }

  agregarProducto(frmProductoValue:any){
    if(this.frmProducto.valid){
      var codigo = frmProductoValue.txtCodigo;
      var nombre = frmProductoValue.txtNombre;
      var precio = frmProductoValue.txtPrecio;
      var categoria = frmProductoValue.cbCategoria;
      var foto = frmProductoValue.fileFoto;
      this.producto = new IProducto(codigo, nombre, precio, categoria, foto)
    }
    console.log(this.producto);
    this.productoSvc.agregarProducto(this.producto).subscribe(respuesta =>{
      console.log(respuesta);
      this.mensaje = "Agregado producto correctamente"
      this.location.back();
    }, error=>{
      console.log(error);
      this.mensaje = "Error al agregar producto"
    }
      )
  }

  ngOnInit(): void {
    this.listarCategorias();
    this.frmProducto = new FormGroup({
      txtCodigo: new FormControl('', [Validators.required]),
      txtNombre: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      txtPrecio: new FormControl('', [Validators.required]),
      cbCategoria: new FormControl('', [Validators.required]),
      fileFoto: new FormControl('', [Validators.required]),
    })
  }

}
