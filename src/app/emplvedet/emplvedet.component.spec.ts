import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplvedetComponent } from './emplvedet.component';

describe('EmplvedetComponent', () => {
  let component: EmplvedetComponent;
  let fixture: ComponentFixture<EmplvedetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplvedetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplvedetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
