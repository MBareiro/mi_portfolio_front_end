import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/servicios/project.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {
  project: Project = null;
  formSubmitted = false;
  
  constructor(
    private projectS: ProjectService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectS.detail(id).subscribe(
      data =>{
        this.project = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
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

    const id = this.activatedRouter.snapshot.params['id'];
    this.projectS.update(id, this.project).subscribe(
      data => {
        Swal.fire({
          title: 'Éxito!',
          text: 'Proyecto modificado correctamente.',
          icon: 'success',
          background: '#1e2833',
          color: 'white',
          iconColor: 'white',
          confirmButtonColor: '#1e2833',
          confirmButtonText: 'Aceptar',
        });
        this.router.navigate(['']);
      }, err => {
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
    )
  }
  isFormValid(): boolean {
    return !!this.project?.titulo && !!this.project?.descripcion;
  }
}
