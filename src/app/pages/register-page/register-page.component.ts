import { Component } from '@angular/core';
import { StartBgComponent } from "../../components/start-bg/start-bg.component";
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register-page',
  imports: [StartBgComponent,RouterLink, ReactiveFormsModule,],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  constructor(private userService: UserService, private router: Router) { }
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    const credentials = this.registerForm.value;

    this.userService.register(credentials).subscribe({
      next: response => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
