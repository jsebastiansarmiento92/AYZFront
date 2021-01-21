import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPractica6Component } from './area-practica6.component';

describe('AreaPractica6Component', () => {
  let component: AreaPractica6Component;
  let fixture: ComponentFixture<AreaPractica6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaPractica6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPractica6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
