import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNocheComponent } from './footer-noche.component';

describe('FooterNocheComponent', () => {
  let component: FooterNocheComponent;
  let fixture: ComponentFixture<FooterNocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterNocheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
