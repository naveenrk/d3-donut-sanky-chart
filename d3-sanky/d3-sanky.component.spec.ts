import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3SankyComponent } from './d3-sanky.component';

describe('D3SankyComponent', () => {
  let component: D3SankyComponent;
  let fixture: ComponentFixture<D3SankyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3SankyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3SankyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
