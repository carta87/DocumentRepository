import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimefacesComponent } from './primefaces.component';

describe('PrimefacesComponent', () => {
  let component: PrimefacesComponent;
  let fixture: ComponentFixture<PrimefacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimefacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimefacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
