import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTemplateControlComponent } from './new-template-control.component';

describe('NewTemplateControlComponent', () => {
  let component: NewTemplateControlComponent;
  let fixture: ComponentFixture<NewTemplateControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTemplateControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTemplateControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
