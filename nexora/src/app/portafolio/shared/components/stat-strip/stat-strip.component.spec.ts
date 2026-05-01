import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatStripComponent } from './stat-strip.component';

describe('StatStripComponent', () => {
  let component: StatStripComponent;
  let fixture: ComponentFixture<StatStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatStripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
