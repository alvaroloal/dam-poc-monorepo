import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent }, // Ruta protegida (simulada)
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a login por defecto
    { path: '**', redirectTo: '/login' } // Redirige cualquier otra ruta a login
];
