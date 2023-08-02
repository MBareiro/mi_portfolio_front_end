import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private baseUrl = 'http://localhost:8080'; // Reemplaza con la URL base de tu backend

  constructor(private http: HttpClient) { }

  enviarMensaje(mensaje: any): Observable<string> {
    const url = `${this.baseUrl}/enviar-mensaje`;
    return this.http.post<string>(url, mensaje);
  }
}
