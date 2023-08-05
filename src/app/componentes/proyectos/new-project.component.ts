import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/servicios/project.service';
import { ImageService } from 'src/app/servicios/image.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent {
  titulo: string = "";
  descripcion: string = "";
  img: string = "";
  link: string = "";
  formSubmitted = false;
  selectedImage: File | null = null; // Variable para almacenar la imagen seleccionada

  constructor(
    private projectS: ProjectService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imageService: ImageService
  ) {}

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.imageService.uploadImage($event, name);
  }

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
   
    const project = new Project(this.titulo, this.descripcion, this.imageService.url, this.link);
    this.projectS.save(project).subscribe(
      (data) => {
        Swal.fire({
          title: 'Éxito!',
          text: 'Proyecto añadido correctamente.',
          icon: 'success',
          background: '#1e2833',
          color: 'white',
          iconColor: 'white',
          confirmButtonColor: '#1e2833',
          confirmButtonText: 'Aceptar',
        });
        this.imageService.url = "";
        this.router.navigate(['']);
      },
      (err) => {
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
        alert(err);
        this.router.navigate(['']);
      }
    );
  }

  isFormValid(): boolean {
    return !!this.titulo && !!this.descripcion && !!this.link;
  }
}

/*
export class NewProjectComponent {
  titulo: string;
  descripcion: string;
  formSubmitted = false;

  constructor(private projectS: ProjectService, 
    private router: Router,
    private activatedRouter: ActivatedRoute, 
    private projectService: ProjectService, 
    public imageService: ImageService) {}

  ngOnInit(): void {}

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
    
    const project = new Project(this.titulo, this.descripcion);
    this.projectS.save(project).subscribe(
      (data) => {
        Swal.fire({
          title: 'Éxito!',
          text: 'Proyecto añadido correctamente.',
          icon: 'success',
          background: '#1e2833',
          color: 'white',
          iconColor: 'white',
          confirmButtonColor: '#1e2833',
          confirmButtonText: 'Aceptar',
        });
        this.router.navigate(['']);
      },
      (err) => {
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
    return !!this.titulo && !!this.descripcion;
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);
  }
}*/
