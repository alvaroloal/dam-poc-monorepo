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
  isLoading = false;
  private apiService = inject(ApiService);

  ngOnInit(): void {
    // this.callApi();
  }

  callApi(): void {
    this.errorMessage = null;
    this.apiMessage = null;
    this.isLoading = true;

    this.apiService.getHelloMessage().subscribe({
      next: (response) => {
        this.apiMessage = JSON.stringify(response, null, 2);
        this.isLoading = false;
        console.log('API response received:', response);
      },
      error: (error) => {
        this.errorMessage = `Fallo al llamar API (${error.status}): ${error.message || 'Error desconocido'}`;
        this.isLoading = false;
        console.error('API call failed:', error);
      }
    });
  }
}