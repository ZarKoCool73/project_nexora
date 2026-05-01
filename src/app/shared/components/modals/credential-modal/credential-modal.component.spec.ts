import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialModalComponent } from './credential-modal.component';

describe('CredentialModalComponent', () => {
  let component: CredentialModalComponent;
  let fixture: ComponentFixture<CredentialModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CredentialModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredentialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
