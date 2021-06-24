import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductsbyproductIdComponent } from './viewproductsbyproduct-id.component';

describe('ViewproductsbyproductIdComponent', () => {
  let component: ViewproductsbyproductIdComponent;
  let fixture: ComponentFixture<ViewproductsbyproductIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproductsbyproductIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductsbyproductIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
