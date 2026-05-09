import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardProjectCardComponent } from './standard-project-card.component';

describe('StandardProjectCardComponent', () => {
  let component: StandardProjectCardComponent;
  let fixture: ComponentFixture<StandardProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardProjectCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
