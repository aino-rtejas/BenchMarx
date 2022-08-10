import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BGraphComponent } from './bgraph.component';

describe('BGraphComponent', () => {
  let component: BGraphComponent;
  let fixture: ComponentFixture<BGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
