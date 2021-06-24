import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcategoryComponent } from './viewallcategory.component';

describe('ViewallcategoryComponent', () => {
  let component: ViewallcategoryComponent;
  let fixture: ComponentFixture<ViewallcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
