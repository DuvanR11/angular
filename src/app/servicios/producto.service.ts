import { Injectable } from '@angular/core';
import { IProducto } from '../models/producto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:8000/producto'
  constructor(private http: HttpClient) { }

  litarProductos(): Observable<any>{
    console.log('Categoias: ' + this.http.get(this.url));
    return this.http.get(this.url)
  }

  getProducto(id: string): Observable<any>{
    console.log(this.http.get(this.url + "/"+id))
    return this.http.get(this.url + "/"+id)
  }

  eliminarProducto(id: string): Observable<any>{
    console.log(this.http.delete(this.url + "/"+id))
    return this.http.delete(this.url + "/"+id)
  }

  agregarProducto(producto : IProducto): Observable<any>{
    console.log(this.http.post(this.url, producto ))
    return this.http.post(this.url, producto)
  }

  editarProducto(id : string, producto : IProducto): Observable<any>{
    console.log(this.http.put(this.url + "/"+id, producto))
    return this.http.put(this.url + "/"+id, producto)
  }

}
