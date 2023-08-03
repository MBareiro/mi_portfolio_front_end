import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactoService } from '../../servicios/contacto.service';
import { Mensaje } from '../../models/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  mensajeEnviado: boolean = false;
  nombre: string = "";
  correo: string = "";
  contenido: string = "";

  constructor(private contactoService: ContactoService) { }

  enviarMensaje(form: NgForm): void {
    if (form.valid) {
      const mensaje = new Mensaje(this.nombre, this.correo, this.contenido);
      
      this.contactoService.enviarMensaje(mensaje).subscribe(
        () => {
          this.mensajeEnviado = true;
          console.log('Mensaje enviado con éxito.');
          form.resetForm(); // Limpia el formulario
        },
        (error) => {
          console.error('Error al enviar el mensaje:', error);
        }
      );
    }
  }
}
