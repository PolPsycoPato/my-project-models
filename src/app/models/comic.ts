export class Comic {
  public titulo: string;
  public descripcion: string;
  public imagen: string;

  constructor(titulo: string, descripcion: string, imagen: string) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
}
