import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloutputComponent } from './caloutput.component';

describe('CaloutputComponent', () => {
  let component: CaloutputComponent;
  let fixture: ComponentFixture<CaloutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
