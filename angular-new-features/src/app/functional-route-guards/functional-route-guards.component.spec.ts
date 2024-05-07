import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalRouteGuardsComponent } from './functional-route-guards.component';

describe('FunctionalRouteGuardsComponent', () => {
  let component: FunctionalRouteGuardsComponent;
  let fixture: ComponentFixture<FunctionalRouteGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionalRouteGuardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionalRouteGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
