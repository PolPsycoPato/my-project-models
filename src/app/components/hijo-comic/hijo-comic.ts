import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-hijo-comic',
  imports: [CommonModule],
  templateUrl: './hijo-comic.html',
  styleUrl: './hijo-comic.css',
})
export class HijoComic {
  @Input() comic!: Comic; // Recibe el comic desde el padre
  @Input() index!: number;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteComic: EventEmitter<any> = new EventEmitter<any>();

  eliminarComic(): void{
    this.deleteComic.emit(this.index);
  }

  marcarFavorito():void{
    this.seleccionarFavorito.emit(this.comic);
  }
}
