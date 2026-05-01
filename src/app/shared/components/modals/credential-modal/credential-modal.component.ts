import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Credential} from '../../../../core/models/credentials.models';

@Component({
  selector: 'app-credential-modal',
  standalone: true,
  templateUrl: './credential-modal.component.html',
  styleUrls: ['./credential-modal.component.scss']
})
export class CredentialModalComponent {

  @Input() credential!: Credential;
  @Output() close = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {
  }

  onClose() {
    this.close.emit();
  }

  get safePdf(): SafeResourceUrl | null {
    if (!this.credential?.fileUrl) return null;

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.credential.fileUrl
    );
  }

  get isPdf(): boolean {
    return this.credential?.fileType === 'pdf';
  }

  get isImage(): boolean {
    return this.credential?.fileType === 'image';
  }

  get fileName(): string {
    return this.credential?.fileUrl?.split('/').pop() || 'archivo';
  }

  downloadFile() {
    const url = this.credential.fileUrl;
    if (!url) return;

    const a = document.createElement('a');
    a.href = url;
    a.download = this.fileName;
    a.target = '_blank';
    a.click();
  }

}
