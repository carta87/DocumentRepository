import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaSwingComponent } from './java-swing.component';

describe('JavaSwingComponent', () => {
  let component: JavaSwingComponent;
  let fixture: ComponentFixture<JavaSwingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaSwingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaSwingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
