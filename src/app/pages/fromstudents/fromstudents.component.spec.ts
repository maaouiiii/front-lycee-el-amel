import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromstudentsComponent } from './fromstudents.component';

describe('FromstudentsComponent', () => {
  let component: FromstudentsComponent;
  let fixture: ComponentFixture<FromstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
