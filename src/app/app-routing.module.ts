import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditSkillComponent } from './componentes/habilidades/edit-skill.component';
import { NewSkillComponent } from './componentes/habilidades/new-skill.component';
import { HomeComponent } from './componentes/home/home.component';
import { EditSobreMiComponent } from './componentes/sobre-mi/edit-sobre-mi.component';
import { NewProjectComponent } from './componentes/proyectos/new-project.component';
import { EditProjectComponent } from './componentes/proyectos/edit-project.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},

  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},

  { path: 'editsobremi/:id', component: EditSobreMiComponent},

  { path: 'newproject', component: NewProjectComponent},
  { path: 'editproject/:id', component: EditProjectComponent},

  { path: 'editsobremi/:id', component: EditSobreMiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
