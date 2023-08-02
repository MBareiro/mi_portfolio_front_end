import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  persona: Persona = new Persona();
  isLogged = false;

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void{
    this.personaService.detail(1).subscribe(data => 
      {this.persona = data}
      )
  }
}

/*package com.miportfolio.mbdev.Interface;

import com.miportfolio.mbdev.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    // Traer una lista de personas
    public List<Persona> getPersona();
    
    // Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
    
    // Eliminar un objeto pero lo buscamos por Id
    public void deletePersona(Long id);
    
    // Buscar una persona por Id
    public Persona findPersona(Long id);
} */