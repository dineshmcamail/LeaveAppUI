import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrdetailComponent } from './mgrdetail.component';

describe('MgrdetailComponent', () => {
  let component: MgrdetailComponent;
  let fixture: ComponentFixture<MgrdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgrdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
