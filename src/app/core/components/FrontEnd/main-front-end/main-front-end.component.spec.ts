import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFrontEndComponent } from './main-front-end.component';

describe('MainFrontEndComponent', () => {
  let component: MainFrontEndComponent;
  let fixture: ComponentFixture<MainFrontEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFrontEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
