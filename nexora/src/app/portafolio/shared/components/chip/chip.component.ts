// src/app/shared/components/chip/chip.component.ts
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipComponent {
  @Input({required: true}) label!: string;
}
