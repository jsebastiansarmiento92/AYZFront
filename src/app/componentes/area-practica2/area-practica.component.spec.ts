import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPractica2Component } from './area-practica2.component';

describe('AreaPractica2Component', () => {
  let component: AreaPractica2Component;
  let fixture: ComponentFixture<AreaPractica2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaPractica2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPractica2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
