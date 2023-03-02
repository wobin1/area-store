import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifiedStoresRandomProductsComponent } from './unverified-stores-random-products.component';

describe('UnverifiedStoresRandomProductsComponent', () => {
  let component: UnverifiedStoresRandomProductsComponent;
  let fixture: ComponentFixture<UnverifiedStoresRandomProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnverifiedStoresRandomProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnverifiedStoresRandomProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
