import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueJsComponent } from './vue-js.component';

describe('VueJsComponent', () => {
  let component: VueJsComponent;
  let fixture: ComponentFixture<VueJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
