import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsharpComponent } from './fsharp.component';

describe('FsharpComponent', () => {
  let component: FsharpComponent;
  let fixture: ComponentFixture<FsharpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsharpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
