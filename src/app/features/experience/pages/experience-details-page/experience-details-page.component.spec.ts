import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailsPageComponent } from './experience-details-page.component';

describe('ExperienceDetailsPageComponent', () => {
  let component: ExperienceDetailsPageComponent;
  let fixture: ComponentFixture<ExperienceDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
