import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainArquitecturasComponent } from './main-arquitecturas.component';

describe('MainArquitecturasComponent', () => {
  let component: MainArquitecturasComponent;
  let fixture: ComponentFixture<MainArquitecturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainArquitecturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainArquitecturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
