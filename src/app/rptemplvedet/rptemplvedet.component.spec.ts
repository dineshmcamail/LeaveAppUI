import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RptemplvedetComponent } from './rptemplvedet.component';

describe('RptemplvedetComponent', () => {
  let component: RptemplvedetComponent;
  let fixture: ComponentFixture<RptemplvedetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RptemplvedetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RptemplvedetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
