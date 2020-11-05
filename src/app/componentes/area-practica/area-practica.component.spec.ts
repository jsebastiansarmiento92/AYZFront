import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPracticaComponent } from './area-practica.component';

describe('AreaPracticaComponent', () => {
  let component: AreaPracticaComponent;
  let fixture: ComponentFixture<AreaPracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaPracticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
