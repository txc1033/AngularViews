import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalinputComponent } from './calinput.component';

describe('CalinputComponent', () => {
  let component: CalinputComponent;
  let fixture: ComponentFixture<CalinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
