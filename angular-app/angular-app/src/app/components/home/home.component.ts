import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common'; // Para *ngIf

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Añade CommonModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apiMessage: string | null = null;
  errorMessage: string | null = null;
  private apiService = inject(ApiService);

  ngOnInit(): void {
    // Opcional: Llamar a la API al cargar el componente
    // this.callApi();
  }

  callApi(): void {
    this.errorMessage = null; // Reset error
    this.apiMessage = 'Loading...'; // Show loading state
    this.apiService.getHelloMessage().subscribe({
      next: (response) => {
        this.apiMessage = response.data;
        console.log('API response received:', response);
      },
      error: (error) => {
        this.errorMessage = `Failed to call API. Status: ${error.status} - ${error.message}`;
        this.apiMessage = null; // Clear loading/previous message
        console.error('API call failed:', error);
      }
    });
  }
}
