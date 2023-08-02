import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSkillComponent } from './new-skill.component';

describe('NewSkillComponent', () => {
  let component: NewSkillComponent;
  let fixture: ComponentFixture<NewSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSkillComponent]
    });
    fixture = TestBed.createComponent(NewSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
