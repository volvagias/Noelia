import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  navigateToSendEmail(): void {
    // Navegar a una ruta dentro de HomeComponent que no incluya app-contact
    this.router.navigate(['/app-send-email']);
  }

}
