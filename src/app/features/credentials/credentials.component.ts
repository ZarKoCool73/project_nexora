import {Component} from '@angular/core';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';
import {Credential, credentials} from '../../core/models/credentials.models';

@Component({
  selector: 'app-credentials',
  standalone: true,
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss'],
  imports: [RevealDirective]
})
export class CredentialsComponent {

  credentials: Credential[] = credentials
}
