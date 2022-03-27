import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLibreriasComponent } from './main-librerias.component';

describe('MainLibreriasComponent', () => {
  let component: MainLibreriasComponent;
  let fixture: ComponentFixture<MainLibreriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLibreriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLibreriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
