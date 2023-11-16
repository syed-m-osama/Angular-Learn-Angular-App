import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeButtonComponent } from './safe-button.component';

describe('SafeButtonComponent', () => {
  let component: SafeButtonComponent;
  let fixture: ComponentFixture<SafeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafeButtonComponent]
    });
    fixture = TestBed.createComponent(SafeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
