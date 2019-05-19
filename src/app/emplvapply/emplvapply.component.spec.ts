import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplvapplyComponent } from './emplvapply.component';

describe('EmplvapplyComponent', () => {
  let component: EmplvapplyComponent;
  let fixture: ComponentFixture<EmplvapplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplvapplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplvapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
