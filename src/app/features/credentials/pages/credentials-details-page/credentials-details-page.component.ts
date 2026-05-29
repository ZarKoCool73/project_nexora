import {
  Component,
  computed,
  inject,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ActivatedRoute,
  Router,
  RouterModule
} from '@angular/router';

import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

import {
  Credential,
  credentials
} from '../../../../core/models/credentials.models';

@Component({
  selector: 'app-credential-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './credentials-details-page.component.html',
  styleUrls: ['./credentials-details-page.component.scss']
})
export class CredentialsDetailsPageComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly sanitizer = inject(DomSanitizer);

  readonly credential = signal<Credential | null>(null);

  constructor() {

    const idCredential = this.route.snapshot
      .paramMap
      .get('idCredential');

    if (!idCredential) {

      this.router.navigate(['/credentials']);

      return;
    }

    const foundCredential = credentials.find(
      credential =>
        credential.idCredential === idCredential
    );

    if (!foundCredential) {

      this.router.navigate(['/credentials']);

      return;
    }

    this.credential.set(foundCredential);

  }

  readonly safePdf = computed<SafeResourceUrl | null>(() => {

    const fileUrl = this.credential()?.fileUrl;

    if (!fileUrl?.toLowerCase().endsWith('.pdf')) {
      return null;
    }

    return this.sanitizer
      .bypassSecurityTrustResourceUrl(fileUrl);

  });

  readonly isPdf = computed(() => {

    return this.credential()?.fileType === 'pdf';

  });

  readonly isImage = computed(() => {

    return this.credential()?.fileType === 'image';

  });

  downloadFile(): void {

    const credential = this.credential();

    if (!credential?.fileUrl) {
      return;
    }

    const link = document.createElement('a');

    link.href = credential.fileUrl;

    link.download =
      `${credential.title}.${credential.fileType === 'pdf' ? 'pdf' : 'jpg'}`;

    link.target = '_blank';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

  }

  goBack(): void {

    this.router.navigate(['/credentials']);

  }

}
