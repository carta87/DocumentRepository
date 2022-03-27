import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBackEndComponent } from './main-back-end.component';

describe('MainBackEndComponent', () => {
  let component: MainBackEndComponent;
  let fixture: ComponentFixture<MainBackEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBackEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
