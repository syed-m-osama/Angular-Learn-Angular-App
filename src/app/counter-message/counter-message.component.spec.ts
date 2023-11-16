import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterMessageComponent } from './counter-message.component';

describe('CounterMessageComponent', () => {
  let component: CounterMessageComponent;
  let fixture: ComponentFixture<CounterMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterMessageComponent]
    });
    fixture = TestBed.createComponent(CounterMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
