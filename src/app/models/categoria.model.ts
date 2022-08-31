export class ICategoria{
  _id?: number;
  catNombre: string;
  // catFoto: string;
  // created_at: string;
  // updated_at: string;

  constructor(nombre: string) {
    this.catNombre = nombre;
    // this.created_at = created_at;
    // this.updated_at = updated_at;
  }

}
