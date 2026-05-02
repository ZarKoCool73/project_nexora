import {Component, EventEmitter, Output} from '@angular/core';
import {CvOption, CVS} from '../../../../core/models/cv.model';

@Component({
  selector: 'app-cv-modal',
  standalone: true,
  templateUrl: './cv-modal.component.html',
  styleUrls: ['./cv-modal.component.scss']
})
export class CvModalComponent {

  @Output() close = new EventEmitter<void>();

  cvs: CvOption[] = CVS

  onClose() {
    this.close.emit();
  }

  download(file: string) {
    const a = document.createElement('a');
    a.href = file;
    a.download = file.split('/').pop() || 'cv.pdf';
    a.click();
  }
}
