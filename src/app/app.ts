import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProductosComponent } from './components/lista.productos.component/lista.productos.component';
import { PadreCoches } from './components/padre-coches/padre-coches';
import { HijoCoche } from './components/hijo-coche/hijo-coche';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaProductosComponent, PadreCoches, HijoCoche],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-project-models');
}
