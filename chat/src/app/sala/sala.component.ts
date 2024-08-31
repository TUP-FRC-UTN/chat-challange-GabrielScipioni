import {Component, EventEmitter, Input, Output} from '@angular/core';
import {mensaje} from "../Mensaje";

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  @Input() messages : mensaje[] =[];


}
