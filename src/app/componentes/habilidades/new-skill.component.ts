import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/servicios/skill.service';
import { ImageService } from 'src/app/servicios/image.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css'],
})
export class NewSkillComponent{
  nombre: string = "";
  img: string = "";
  formSubmitted = false;

  constructor(
    private skillS: SkillService, 
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imageService: ImageService) {}

  ngOnInit(): void {}

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

    const skill = new Skill(this.nombre, this.imageService.url);
    this.skillS.save(skill).subscribe(
      data => {
        Swal.fire({
          title: 'Éxito!',
          text: 'Habilidad añadida correctamente.',
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
    return !!this.nombre;
  }
}
