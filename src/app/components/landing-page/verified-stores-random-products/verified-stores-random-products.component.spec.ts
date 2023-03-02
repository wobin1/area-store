import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedStoresRandomProductsComponent } from './verified-stores-random-products.component';

describe('VerifiedStoresRandomProductsComponent', () => {
  let component: VerifiedStoresRandomProductsComponent;
  let fixture: ComponentFixture<VerifiedStoresRandomProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedStoresRandomProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedStoresRandomProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
