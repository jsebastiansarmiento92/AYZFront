import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPractica3Component } from './area-practica3.component';

describe('AreaPractica3Component', () => {
  let component: AreaPractica3Component;
  let fixture: ComponentFixture<AreaPractica3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaPractica3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPractica3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
