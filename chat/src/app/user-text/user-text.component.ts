import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-user-text',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-text.component.html',
  styleUrl: './user-text.component.css'
})
export class UserTextComponent {
  @Input() username : string ="";
  message : string ="";
  @Output() SendMessage = new EventEmitter<string>();

  Send(){
    if (this.message.trim())
      this.SendMessage.emit(this.message)
      this.message ="";
  }
}
