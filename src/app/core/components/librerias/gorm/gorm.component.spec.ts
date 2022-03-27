import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GormComponent } from './gorm.component';

describe('GormComponent', () => {
  let component: GormComponent;
  let fixture: ComponentFixture<GormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
