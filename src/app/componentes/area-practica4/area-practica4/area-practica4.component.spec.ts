import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPractica4Component } from './area-practica4.component';

describe('AreaPractica4Component', () => {
  let component: AreaPractica4Component;
  let fixture: ComponentFixture<AreaPractica4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaPractica4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPractica4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
