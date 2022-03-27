import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFrameworksComponent } from './main-frameworks.component';

describe('MainFrameworksComponent', () => {
  let component: MainFrameworksComponent;
  let fixture: ComponentFixture<MainFrameworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFrameworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
