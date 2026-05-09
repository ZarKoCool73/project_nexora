import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveProjectRowComponent } from './archive-project-row.component';

describe('ArchiveProjectRowComponent', () => {
  let component: ArchiveProjectRowComponent;
  let fixture: ComponentFixture<ArchiveProjectRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveProjectRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveProjectRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
