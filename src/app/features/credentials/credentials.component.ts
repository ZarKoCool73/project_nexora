import {Component, OnInit} from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';
import { Credential, credentials } from '../../core/models/credentials.models';
import { ModalService } from '../../core/services/local/modal/modal.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-credentials',
  standalone: true,
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss'],
  imports: [RevealDirective, SlicePipe]
})
export class CredentialsComponent implements OnInit {

  credentials: Credential[] = credentials;
  titulos: Credential[] = [];
  diplomas: Credential[] = [];
  certificaciones: Credential[] = [];

  constructor(
    private readonly credentialModal: ModalService
  ) {}

  ngOnInit() {
    this.titulos = this.sortAndFilter(['Título', 'Colegiatura']);
    this.diplomas = this.sortAndFilter(['Diploma']);
    this.certificaciones = this.sortAndFilter(['Certificación']);
  }

  openCert(cert: Credential) {
    this.credentialModal.openCM(cert);
  }

  private sortAndFilter(types: Credential['type'][]) {
    return this.credentials
      .filter(c => types.includes(c.type))
      .sort((a, b) => b.date - a.date);
  }
}
