import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // se usan para interactuar con las rutas y detectar cuándo se navega a una nueva página.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  showComponent = true;

  constructor(private router: Router) {} // se debe inyectar el Router en el constructor.

  ngOnInit(): void {
    this.router.events.subscribe(event => {   
      // 'this.router.events' devuelve un observable que emite eventos relacionados con la navegación en la aplicación Angular.
      // 'subscribe(event =>' permite suscribirse a estos eventos y ejecutar una función cada vez que ocurre un evento.
      if (event instanceof NavigationEnd) {
        // 'event instanceof NavigationEnd' : Dentro de la suscripción, se verifica si el evento es de tipo NavigationEnd : es una clase específica dentro del conjunto de eventos de Router en Angular. 
        // Este evento se dispara cuando se completa una navegación exitosa a una nueva ruta.

        // Ajusta las rutas según las cuales deseas mostrar u ocultar el header
        if (this.router.url === '/home/top-info') {
          this.showComponent = false;
        } else {
          this.showComponent = true;
        }
      }
    });
  }

}
