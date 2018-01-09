import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartementdetailComponent } from './appartementdetail.component';

describe('AppartementdetailComponent', () => {
  let component: AppartementdetailComponent;
  let fixture: ComponentFixture<AppartementdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppartementdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartementdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
