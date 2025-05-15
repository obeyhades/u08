import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { EditprofileBgComponent } from "../../components/editprofile-bg/editprofile-bg.component";
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { User, UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  imports: [NavbarComponent, EditprofileBgComponent, ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  editProfileForm: FormGroup;
  private route = inject(ActivatedRoute)

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.editProfileForm = this.fb.group({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
   }

  onSubmit() {
    console.log(this.editProfileForm.value)
    const credentials: {accessToken: string, username: string, email: string, password: string} ={
      ...this.editProfileForm.value,
      accessToken: localStorage.getItem('accesstoken') || ''
    }

    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.updateUser(credentials, userId!).subscribe({
      next: (response: {user: User}) => {
        console.log(response);
      },
      error: (err: unknown) => {
        if (err instanceof Error) {
          console.log(err.message);
        }
      }
    })
  }

  deleteAccount(){
    const userId = this.route.snapshot.paramMap.get('id');
    console.log(userId);
    
    this.userService.deleteUser(userId!).subscribe({
      next: (response: {user: User}) => {
        console.log(response);
      },
      error: (err: unknown) => {
        if (err instanceof Error) {
          console.log(err.message);
        }
    }
  })
  }


}
