import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoicePageComponent } from './multiple-choice-page.component';

describe('MultipleChoicePageComponent', () => {
  let component: MultipleChoicePageComponent;
  let fixture: ComponentFixture<MultipleChoicePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleChoicePageComponent]
    });
    fixture = TestBed.createComponent(MultipleChoicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
