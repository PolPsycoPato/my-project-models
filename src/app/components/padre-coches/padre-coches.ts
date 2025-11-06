import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoCoche } from '../hijo-coche/hijo-coche';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padre-coches',
  standalone: true,
  imports: [CommonModule, HijoCoche],
  templateUrl: './padre-coches.html',
  styleUrl: './padre-coches.css',
})
export class PadreCoches {
  public coches: Coche[];
  cocheSeleccionado!: Coche;

  constructor() {
    // 🚘 Coches de ejemplo con imagen
    this.coches = [
      new Coche(
        'Honda',
        'Civic Type R',
        'https://www.honda.es/content/dam/central/cars/civic-type-r-2023/Overview/Honda-civic-type-r-01-mobile-1x1.jpg/_jcr_content/renditions/m_r.jpg',
        0,
        15,
        false
      ),
      new Coche(
        'Shelby',
        '500 GT',
        'https://i.blogs.es/6517cd/ford-shelby-gt500-2019-15-/1366_2000.jpg',
        0,
        20,
        false
      ),
      new Coche(
        'Toyota',
        'Yaris GR Sport',
        'https://static.motor.es/fotos-noticias/2024/11/toyota-gr-yaris-sport-2025-2024105499-1732808950_6.jpg',
        0,
        18,
        false
      ),
    ];

    this.cocheSeleccionado = this.coches[0];
  }

  seleccionarCoche(coche: Coche): void {
    this.cocheSeleccionado = coche;
  }

  actualizarCoche(coche: Coche): void {
    const index = this.coches.findIndex((c) => c.modelo === coche.modelo);
    if (index !== -1) {
      this.coches[index] = coche;
    }
  }
}
