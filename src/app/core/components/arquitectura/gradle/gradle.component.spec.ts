import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradleComponent } from './gradle.component';

describe('GradleComponent', () => {
  let component: GradleComponent;
  let fixture: ComponentFixture<GradleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
