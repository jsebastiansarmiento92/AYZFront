import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPractica5Component } from './area-practica5.component';

describe('AreaPractica5Component', () => {
  let component: AreaPractica5Component;
  let fixture: ComponentFixture<AreaPractica5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaPractica5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPractica5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
