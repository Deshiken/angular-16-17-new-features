import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizedImagesComponent } from './optimized-images.component';

describe('OptimizedImagesComponent', () => {
  let component: OptimizedImagesComponent;
  let fixture: ComponentFixture<OptimizedImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizedImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptimizedImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
