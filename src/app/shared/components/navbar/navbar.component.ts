import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menuOpen = false;

  closeMenu() {
    this.menuOpen = false;
  }

  constructor(
    private readonly _router: Router,
  ) {
  }

  gotoRoute(path: string) {
    this._router.navigate(['/', path]).then();
  }

}
