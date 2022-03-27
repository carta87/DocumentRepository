import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaServerFacesComponent } from './java-server-faces.component';

describe('JavaServerFacesComponent', () => {
  let component: JavaServerFacesComponent;
  let fixture: ComponentFixture<JavaServerFacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaServerFacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaServerFacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
