import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductsbycategorynameComponent } from './viewproductsbycategoryname.component';

describe('ViewproductsbycategorynameComponent', () => {
  let component: ViewproductsbycategorynameComponent;
  let fixture: ComponentFixture<ViewproductsbycategorynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproductsbycategorynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductsbycategorynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
