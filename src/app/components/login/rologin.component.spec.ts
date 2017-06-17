import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RologinComponent } from './rologin.component';

describe('RologinComponent', () => {
  let component: RologinComponent;
  let fixture: ComponentFixture<RologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
