import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDateComponent } from './action-date.component';

describe('ActionDateComponent', () => {
  let component: ActionDateComponent;
  let fixture: ComponentFixture<ActionDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionDateComponent]
    });
    fixture = TestBed.createComponent(ActionDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
