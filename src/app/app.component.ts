import { Component } from '@angular/core';
import { Usuario } from './usuario/usuario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Komrade';
  
  ngOnInit(){}

}
