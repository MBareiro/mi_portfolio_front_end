import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent {
  nombreE: string = "";
  descripcionE:  string = "";
  formSubmitted = false;

  constructor(private educacionS: EducacionService, private router: Router) { }

  onCreate(): void {
    this.formSubmitted = true;
    
    if (!this.isFormValid()) {
      Swal.fire({
        title: 'Advertencia!',
        text: 'Por favor, completa todos los campos requeridos.',
        icon: 'warning',
        background: '#1e2833',
        color: 'white',
        iconColor: 'white',
        confirmButtonColor: '#1e2833',
        confirmButtonText: 'Aceptar',
      });
      return;
    }

    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      () => {
        Swal.fire({
          title: 'Éxito!',
          text: 'Educación añadida correctamente.',
          icon: 'success',
          background: '#1e2833',
          color: 'white',
          iconColor: 'white',
          confirmButtonColor: '#1e2833',
          confirmButtonText: 'Aceptar',
        });
        this.router.navigate(['']);
      },
      () => {
        Swal.fire({
          title: 'Ups!',
          text: 'Algo no salió bien :(',
          icon: 'error',
          background: '#1e2833',
          color: 'white',
          iconColor: 'white',
          confirmButtonColor: '#1e2833',
          confirmButtonText: 'Aceptar',
        });
        this.router.navigate(['']);
      }
    );
  }

  isFormValid(): boolean {
    return !!this.nombreE && !!this.descripcionE;
  }
}
