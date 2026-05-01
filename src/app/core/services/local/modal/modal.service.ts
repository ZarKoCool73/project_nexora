import {
  ApplicationRef,
  createComponent,
  EnvironmentInjector,
  Injectable
} from '@angular/core';
import {Project} from '../../../models/project.model';
import {ProjectModalComponent} from '../../../../shared/components/modals/project-modal/project-modal.component';


@Injectable({providedIn: 'root'})
export class ProjectModalService {

  private componentRef: any;

  constructor(
    private readonly appRef: ApplicationRef,
    private readonly injector: EnvironmentInjector
  ) {
  }

  open(project: Project) {

    // crear componente dinámico
    this.componentRef = createComponent(ProjectModalComponent, {
      environmentInjector: this.injector
    });

    // pasar data
    this.componentRef.instance.project = project;

    // escuchar cierre
    this.componentRef.instance.close.subscribe(() => {
      this.close();
    });

    // montar en DOM (BODY)
    document.body.appendChild(this.componentRef.location.nativeElement);

    // conectar a Angular change detection
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
