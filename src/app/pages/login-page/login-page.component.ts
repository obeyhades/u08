import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StartBgComponent } from "../../components/start-bg/start-bg.component";

@Component({
  selector: 'app-login-page',
  imports: [StartBgComponent, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
}
