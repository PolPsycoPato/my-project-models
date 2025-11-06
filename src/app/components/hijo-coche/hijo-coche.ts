import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-hijo-coche',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hijo-coche.html',
  styleUrl: './hijo-coche.css',
})
export class HijoCoche {

  @Input() coche!: Coche; // Recibe el coche desde el padre
  @Output() cocheActualizado = new EventEmitter<Coche>(); // Envía el coche actualizado

  arrancar(): void {
    if (this.coche.estado) {
      alert(`${this.coche.marca} ${this.coche.modelo} ya está encendido.`);
    } else {
      this.coche.estado = true;
      alert(`${this.coche.marca} ${this.coche.modelo} arrancado correctamente.`);
    }
    this.cocheActualizado.emit(this.coche);
  }

  apagar(): void {
    if (!this.coche.estado) {
      alert(`${this.coche.marca} ${this.coche.modelo} ya está apagado.`);
    } else {
      this.coche.estado = false;
      this.coche.velocidad = 0;
      alert(`${this.coche.marca} ${this.coche.modelo} se ha apagado.`);
    }
    this.cocheActualizado.emit(this.coche);
  }

  acelerar(): void {
    if (!this.coche.estado) {
      alert(`No puedes acelerar, ${this.coche.marca} ${this.coche.modelo} está apagado.`);
      return;
    }
    this.coche.velocidad += this.coche.aceleracion;
    this.cocheActualizado.emit(this.coche);
  }

  frenar(): void {
    if (!this.coche.estado) {
      alert(`${this.coche.marca} ${this.coche.modelo} está apagado, no puede frenar.`);
      return;
    }
    this.coche.velocidad -= this.coche.aceleracion / 2;
    if (this.coche.velocidad < 0) this.coche.velocidad = 0;
    this.cocheActualizado.emit(this.coche);
  }

  mostrarInfo(): string {
    return `
      Marca: ${this.coche.marca}
      Modelo: ${this.coche.modelo}
      Velocidad actual: ${this.coche.velocidad} km/h
      Aceleración: ${this.coche.aceleracion} km/h²
      Estado: ${this.coche.estado ? 'Encendido' : 'Apagado'}
    `;
  }
}
