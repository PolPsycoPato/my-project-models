import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-lista-productos', // ✅ Nombre más limpio y convencional
  standalone: true, // ✅ Obligatorio para usarlo sin declararlo en un módulo
  imports: [CommonModule],
  templateUrl: './lista.productos.component.html',
  styleUrls: ['./lista.productos.component.css'], // ✅ en plural
})
export class ListaProductosComponent {
  productos: Producto[];

  constructor() {
    this.productos = [
      new Producto(
        'Nike Air Jordan',
        'https://images.zapantojos.com/media/2022/07/39253d37.jpg',
        150
      ),
      new Producto(
        'Nike Air Mag',
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
        1900
      ),
      new Producto(
        'New Balance 998',
        'https://www.sneakers-actus.fr/wp-content/uploads/2023/06/NB-998-U998TE-x-Teddy-Santis-Plum-Purple-MIUSA.jpg',
        140
      ),
      new Producto(
        'J-Hayber Olimpo',
        'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80',
        60
      ),

      new Producto(
        'Triple S Balenciaga',
        'https://mybagandco.com/cdn/shop/files/i1657531157_9525_5_650x.jpg?v=1682764545',
        650
      ),

      new Producto(
        'Nike Air Max 90',
        'https://de.basketzone.net/zdjecia/2019/05/23/1205/01/Q8902jordan_shoes49-mini.jpg',
        110
      ),
      new Producto(
        'Nike Run Flyknit',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
        120
      ),
      new Producto(
        'Nike Air Force 1',
        'https://i.etsystatic.com/25418046/r/il/08a4aa/5934803979/il_570xN.5934803979_2oqp.jpg',
        120
      ),
    ];
  }
}
