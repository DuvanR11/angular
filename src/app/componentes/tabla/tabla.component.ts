import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  public listaProductos: any;
  public listaCategorias: any;
  display = 'none';
  idProducto: any;

  constructor(private productosSvc: ProductoService, private categoriaSvc: CategoriaService) { }

  obtenerProductos(){
    this.productosSvc.litarProductos().subscribe((result)=>{
      this.listaProductos = result
    })
  }

  obtenerCategorias(){
    this.categoriaSvc.litarCategorias().subscribe((result)=>{
      this.listaCategorias = result
    })
  }

  eliminarProducto(){
    this.productosSvc.eliminarProducto(this.idProducto).subscribe((result)=>{
      this.obtenerProductos()
    }
    , error => {
      console.log(error);
    })
    this.display = 'none';
  }

  cerrarModal(){
    this.display='none'
  }

  abrirModalEliminar(id: number){
    this.display='block'
    this.idProducto=id
  }

  ngOnInit(): void {
    this.obtenerCategorias();
    this.obtenerProductos();
  }

}
