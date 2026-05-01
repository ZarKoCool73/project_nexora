import {Component} from '@angular/core';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';
import {Credential, credentials} from '../../core/models/credentials.models';
import {ModalService} from '../../core/services/local/modal/modal.service';
import {SlicePipe} from '@angular/common';

@Component({
  selector: 'app-credentials',
  standalone: true,
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss'],
  imports: [RevealDirective, SlicePipe]
})
export class CredentialsComponent {

  credentials: Credential[] = credentials

  constructor(
    private readonly credentialModal: ModalService
  ) {
  }

  openCert(cert: Credential) {
    this.credentialModal.openCM(cert);
  }

}
