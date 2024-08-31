import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SalaComponent} from "./sala/sala.component";
import {UserTextComponent} from "./user-text/user-text.component";
import {mensaje} from "./Mensaje";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SalaComponent,UserTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat';

  message : mensaje[] =[]

  addMensaje (usuario:string, text:string){
    this.message.push({usuario,text})
  }

}
