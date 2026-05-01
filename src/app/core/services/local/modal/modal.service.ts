import {
  ApplicationRef,
  createComponent,
  EnvironmentInjector,
  Injectable
} from '@angular/core';
import {Project} from '../../../models/project.model';
import {ProjectModalComponent} from '../../../../shared/components/modals/project-modal/project-modal.component';
import {
  CredentialModalComponent
} from '../../../../shared/components/modals/credential-modal/credential-modal.component';
import {Credential} from '../../../models/credentials.models';


@Injectable({providedIn: 'root'})
export class ModalService {

  private componentRef: any;

  constructor(
    private readonly appRef: ApplicationRef,
    private readonly injector: EnvironmentInjector
  ) {
  }

  openPM(project: Project) {

    this.componentRef = createComponent(ProjectModalComponent, {
      environmentInjector: this.injector
    });

    this.componentRef.instance.project = project;
    this.componentRef.instance.close.subscribe(() => {
      this.close();
    });
    document.body.appendChild(this.componentRef.location.nativeElement);
    this.appRef.attachView(this.componentRef.hostView);
  }

  openCM(credential: Credential) {

    this.componentRef = createComponent(CredentialModalComponent, {
      environmentInjector: this.injector
    });

    this.componentRef.instance.credential = credential;

    this.componentRef.instance.close.subscribe(() => {
      this.close();
    });

    document.body.appendChild(this.componentRef.location.nativeElement);
    this.appRef.attachView(this.componentRef.hostView);
  }

  close() {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}
