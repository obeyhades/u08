import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userId: number = 0;
  constructor(private userService: UserService) {
    this.userService.userId$.subscribe((id: number) => {
      this.userId = id;
    })
   }
}
 