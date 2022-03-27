import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponent } from './angular.component';

describe('AngularComponent', () => {
  let component: AngularComponent;
  let fixture: ComponentFixture<AngularComponent>;

  describe("General ", ()=>{
    it("this test should return a string ", ()=>{
      expect("prueba de componente").toEqual("prueba de componente")
    })
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

