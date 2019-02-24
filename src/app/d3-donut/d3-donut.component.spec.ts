import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3DonutComponent } from './d3-donut.component';

describe('D3DonutComponent', () => {
  let component: D3DonutComponent;
  let fixture: ComponentFixture<D3DonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3DonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3DonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
