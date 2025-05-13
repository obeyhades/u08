import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { User, UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'u08';
  users: User[] = [];

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }
}
