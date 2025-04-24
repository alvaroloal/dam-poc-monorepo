import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  // La URL base de la API. Cambiará según el entorno (local vs Docker)
  // En Docker Compose, el frontend (servido por Nginx) llamará al backend por su nombre de servicio y puerto.
  // Pero desde el navegador, la llamada se hace a través del host donde corre el navegador.
  // Usaremos un proxy en Nginx (Paso 6) o configuraremos la URL directamente si Nginx solo sirve estáticos.
  // Por ahora, asumimos que se accede via localhost:8080 (proxy o acceso directo)
  private apiUrl = '/api'; // Usaremos un proxy de Nginx para redirigir /api a http://spring-boot-api:8080

  constructor() { }

  // Método para llamar al endpoint /api/hello de Spring Boot
  getHelloMessage(): Observable<{ data: string }> {
    return this.http.get<{ data: string }>(`${this.apiUrl}/hello`);
  }

  // Método para llamar al endpoint /api/status (opcional, para pruebas)
  getApiStatus(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.apiUrl}/status`);
  }
}
