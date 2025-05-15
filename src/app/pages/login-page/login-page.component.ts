import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { StartBgComponent } from "../../components/start-bg/start-bg.component";
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  imports: [StartBgComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private userService: UserService, private router: Router) { }
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    const credentials = this.loginForm.value;

  this.userService.logIn(credentials).subscribe({
      next: response => {
        console.log(response);
        this.userService.setUserId(response.user_id)
        localStorage.setItem('accesstoken', response.accessToken);
        this.router.navigate([`/mainpage/${response.user_id}`]);
      },
      error: err => {
        console.log(err);
      }
    })  
  }
}
