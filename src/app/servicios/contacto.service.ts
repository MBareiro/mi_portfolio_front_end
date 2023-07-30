import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  mensajes: any[] = [];

  enviarMensaje(nombre: string, email: string, mensaje: string) {
    const mensajeEnviado = {
      nombre: nombre,
      email: email,
      mensaje: mensaje
    };
    this.mensajes.push(mensajeEnviado);
  }

  obtenerMensajes(): any[] {
    return this.mensajes;
  }
}
