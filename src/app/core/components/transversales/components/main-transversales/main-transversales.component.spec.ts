import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTransversalesComponent } from './main-transversales.component';

describe('MainTransversalesComponent', () => {
  let component: MainTransversalesComponent;
  let fixture: ComponentFixture<MainTransversalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTransversalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTransversalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
