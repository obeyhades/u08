import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { UserExpenses } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-main-page',
  imports: [NavbarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  private route = inject(ActivatedRoute)
  expenses: UserExpenses[] = [];
  constructor(private userService: UserService) { }
  
  getExpenses() {
    const userId = this.route.snapshot.paramMap.get('id');
    
    if (!userId) {
      console.error('Something went wrong');
      return;
    }
    this.userService.getUserExpenses(userId).subscribe({
      next: (data: UserExpenses[]) => {
        console.log(data);
        this.expenses = data;
      }
    });
  }
}
