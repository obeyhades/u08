import { Component } from '@angular/core';
import { StartBgComponent } from "../../components/start-bg/start-bg.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register-page',
  imports: [StartBgComponent,RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

}
