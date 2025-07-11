import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listbox } from './listbox';

describe('Listbox', () => {
  let component: Listbox;
  let fixture: ComponentFixture<Listbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
