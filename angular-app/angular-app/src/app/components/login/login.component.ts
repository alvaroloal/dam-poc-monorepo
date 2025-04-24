import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  private router = inject(Router);

  login(): void {

    if (this.username && this.password) {
      console.log('Login successful (simulated)');
      // sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Please enter username and password.';
    }
  }
}