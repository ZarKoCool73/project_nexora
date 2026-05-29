import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsDetailsPageComponent } from './credentials-details-page.component';

describe('CredentialsDetailsPageComponent', () => {
  let component: CredentialsDetailsPageComponent;
  let fixture: ComponentFixture<CredentialsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CredentialsDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredentialsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
