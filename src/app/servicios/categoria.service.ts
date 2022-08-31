import { ICategoria } from '../models/categoria.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CategoriaService {
  url = 'http://localhost:8000/categoria'
  constructor(private http: HttpClient) { }

  litarCategorias(): Observable<any>{
    console.log('Categoias: ' + this.http.get(this.url));
    return this.http.get(this.url)
  }

  getCategoria(id: string): Observable<any>{
    console.log(this.http.get(this.url + "/"+id))
    return this.http.get(this.url + "/"+id)
  }

  eliminarCategoria(id: string): Observable<any>{
    console.log(this.http.delete(this.url + "/"+id))
    return this.http.delete(this.url + "/"+id)
  }

  agregarCategoria(categoria : ICategoria): Observable<any>{
    console.log(this.http.post(this.url, categoria ))
    return this.http.post(this.url, categoria)
  }

  editarCategoria(id : string, categoria : ICategoria): Observable<any>{
    console.log(this.http.put(this.url + "/"+id, categoria))
    return this.http.put(this.url + "/"+id, categoria)
  }

}

