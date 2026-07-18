import {Component, EventEmitter, HostListener, inject, Output} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {CvOption, CVS, ICONS} from '../../../../core/models/cv.model';

@Component({
  selector: 'app-cv-modal',
  standalone: true,
  templateUrl: './cv-modal.component.html',
  styleUrls: ['./cv-modal.component.scss']
})
export class CvModalComponent {

  @Output() close = new EventEmitter<void>();

  cvs: CvOption[] = CVS;
  private readonly sanitizer = inject(DomSanitizer)

  @HostListener('document:keydown.escape')
  onEscape() {
    this.onClose();
  }

  onClose() {
    this.close.emit();
  }

  download(file: string) {
    const a = document.createElement('a');
    a.href = file;
    a.download = file.split('/').pop() || 'cv.pdf';
    a.click();
  }

  getIcon(title: string): SafeHtml {
    const key = title.toLowerCase().includes('fullstack') ? 'fullstack' : title.toLowerCase().includes('backend') ? 'backend'
      : 'frontend';
    return this.sanitizer.bypassSecurityTrustHtml(ICONS[key]);
  }
}
