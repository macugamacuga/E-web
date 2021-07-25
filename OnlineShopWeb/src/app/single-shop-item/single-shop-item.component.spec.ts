import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShopItemComponent } from './single-shop-item.component';

describe('SingleShopItemComponent', () => {
  let component: SingleShopItemComponent;
  let fixture: ComponentFixture<SingleShopItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleShopItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleShopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
