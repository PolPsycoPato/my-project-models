export class Coche {
  public marca: string;
  public modelo: string;
  public imagen: string;
  public velocidad: number;
  public aceleracion: number;
  public estado: boolean;

  constructor(
    marca: string,
    modelo: string,
    imagen: string,
    velocidad: number = 0,
    aceleracion: number = 10,
    estado: boolean = false
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.imagen = imagen;
    this.velocidad = velocidad;
    this.aceleracion = aceleracion;
    this.estado = estado;
  }
}
