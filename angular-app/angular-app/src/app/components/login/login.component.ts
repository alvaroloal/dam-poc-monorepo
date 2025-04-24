import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule para ngIf

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // Añade FormsModule y CommonModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  private router = inject(Router);

  login(): void {
    // *** Lógica de Login Simulada ***
    // En una app real, llamarías a un servicio de autenticación.
    // Aquí, simplemente comprobamos si los campos no están vacíos y redirigimos.
    if (this.username && this.password) {
      console.log('Login successful (simulated)');
      // Simula guardar un token o estado de sesión (opcional aquí)
      // sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']); // Redirige a la página Home
    } else {
      this.errorMessage = 'Please enter username and password.';
    }
  }
}