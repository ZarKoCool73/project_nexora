import {Component, OnInit, ElementRef, ViewChildren, QueryList, Inject} from '@angular/core';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';
import {Credential, credentials} from '../../core/models/credentials.models';
import {ModalService} from '../../core/services/local/modal/modal.service';
import {SlicePipe} from '@angular/common';
import {Router} from '@angular/router';

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

  @ViewChildren('scrollContainer') scrollContainers!: QueryList<ElementRef>;

  constructor(
    private readonly credentialModal: ModalService,
    private readonly _router: Router,
  ) {
  }

  ngOnInit() {
    this.titulos = this.sortAndFilter(['Título', 'Colegiatura']);
    this.diplomas = this.sortAndFilter(['Diploma']);
    this.certificaciones = this.sortAndFilter(['Certificado']);
  }

  openCert(cert: Credential) {
    //this.credentialModal.openCM(cert);
    this._router.navigate(['/credentials', cert.idCredential]).then();
  }

  scroll(containerIndex: number, direction: 'prev' | 'next') {
    const containers = this.scrollContainers.toArray();
    const container = containers[containerIndex]?.nativeElement;
    if (!container) return;

    const cardWidth = container.querySelector('.credential-card')?.offsetWidth ?? 300;
    const gap = 16; // ajusta si tu gap es diferente
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  }

  private sortAndFilter(types: Credential['type'][]) {
    return this.credentials
      .filter(c => types.includes(c.type))
      .sort((a, b) => b.date - a.date);
  }
}
