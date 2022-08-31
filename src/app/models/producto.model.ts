import { ICategoria } from './categoria.model';

export class IProducto{
  _id?: number;
  proCodigo: string;
  proNombre: string;
  proPrecio: number;
  proCategoria: number;
  proFoto: string;
  // created_at: string;
  // updated_at: string;

  constructor(proCodigo: string, proNombre: string, proPrecio: number, proCategoria: number, proFoto: string){
    this.proCodigo = proCodigo;
    this.proNombre = proNombre;
    this.proPrecio = proPrecio;
    this.proCategoria = proCategoria;
    this.proFoto = proFoto;
  }

}
