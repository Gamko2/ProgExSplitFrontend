import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadappartementComponent } from './uploadappartement.component';

describe('UploadappartementComponent', () => {
  let component: UploadappartementComponent;
  let fixture: ComponentFixture<UploadappartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadappartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadappartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
