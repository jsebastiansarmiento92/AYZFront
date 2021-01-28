import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadNocheComponent } from './head-noche.component';

describe('HeadNocheComponent', () => {
  let component: HeadNocheComponent;
  let fixture: ComponentFixture<HeadNocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadNocheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadNocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
