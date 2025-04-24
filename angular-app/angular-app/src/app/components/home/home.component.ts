import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apiMessage: string | null = null;
  errorMessage: string | null = null;
  private apiService = inject(ApiService);

  ngOnInit(): void {
    // this.callApi();
  }

  callApi(): void {
    this.errorMessage = null;
    this.apiMessage = 'Cargando...';
    this.apiService.getHelloMessage().subscribe({
      next: (response) => {
        this.apiMessage = response.data;
        console.log('API response received:', response);
      },
      error: (error) => {
        this.errorMessage = `Fallo al llamar a la API. Status: ${error.status} - ${error.message}`;
        this.apiMessage = null;
        console.error('API call failed:', error);
      }
    });
  }
}
