import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaxbComponent } from './jaxb.component';

describe('JaxbComponent', () => {
  let component: JaxbComponent;
  let fixture: ComponentFixture<JaxbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaxbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JaxbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
