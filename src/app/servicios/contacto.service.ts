import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  URL = environment.URL ; // Reemplaza con la URL base de tu backend

  constructor(private http: HttpClient) { }

  enviarMensaje(mensaje: any): Observable<string> {
    const url = `${this.URL}enviar-mensaje`;
    return this.http.post<string>(url, mensaje);
  }
}