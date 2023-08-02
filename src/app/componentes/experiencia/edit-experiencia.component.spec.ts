import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExperienciaComponent } from './edit-experiencia.component';

describe('EditExperienciaComponent', () => {
  let component: EditExperienciaComponent;
  let fixture: ComponentFixture<EditExperienciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditExperienciaComponent]
    });
    fixture = TestBed.createComponent(EditExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
