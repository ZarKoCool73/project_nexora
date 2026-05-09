import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCredentialsComponent } from './home-credentials.component';

describe('HomeCredentialsComponent', () => {
  let component: HomeCredentialsComponent;
  let fixture: ComponentFixture<HomeCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCredentialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
