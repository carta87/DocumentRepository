import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBdComponent } from './main-bd.component';

describe('MainBdComponent', () => {
  let component: MainBdComponent;
  let fixture: ComponentFixture<MainBdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
