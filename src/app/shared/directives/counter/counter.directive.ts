import { Directive } from '@angular/core';

@Directive({
  selector: '[appCounter]',
  standalone: true
})
export class CounterDirective {

  constructor() { }

}
