import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInput } from './country-input';

describe('CountryInput', () => {
  let component: CountryInput;
  let fixture: ComponentFixture<CountryInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
