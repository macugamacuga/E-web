import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategotyComponent } from './product-categoty.component';

describe('ProductCategotyComponent', () => {
  let component: ProductCategotyComponent;
  let fixture: ComponentFixture<ProductCategotyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategotyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
