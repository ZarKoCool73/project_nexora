import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardProjectsComponent } from './standard-projects.component';

describe('StandardProjectsComponent', () => {
  let component: StandardProjectsComponent;
  let fixture: ComponentFixture<StandardProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
