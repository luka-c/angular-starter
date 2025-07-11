import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListboxOption } from './listbox-option';

describe('ListboxOption', () => {
  let component: ListboxOption;
  let fixture: ComponentFixture<ListboxOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListboxOption]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListboxOption);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
