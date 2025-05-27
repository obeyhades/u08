import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserExpenses, UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  imports: [NavbarComponent, CommonModule, FormsModule],
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  expenses: UserExpenses[] = [];

  incomeTotal = 0;
  savingsTotal = 0;
  expenseTotal = 0;

  userId: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('Ingen användare angiven i URL');
      this.router.navigate(['/login']); 
      return;
    }

    this.userId = id;
    this.getExpenses();
  }

  getExpenses() {
    this.userService.getUserExpenses(this.userId).subscribe({
      next: (data: UserExpenses[]) => {
        this.expenses = data;
        this.updateTotals();
      },
      error: (err) => {
        console.error('Error fetching expenses:', err);
      },
    });
  }

  addQuickExpense(category: 'income' | 'savings' | 'expense') {
    const amountStr = prompt(`Enter ${category} amount:`);
    const description = prompt(`Description (optional):`) || '';
    const amount = Number(amountStr);

    if (isNaN(amount) || amount <= 0) {
      alert('Invalid amount.');
      return;
    }

    const newExpense: UserExpenses = {
      userId: this.userId,
      amount,
      category,
      description,
    };

    console.log('Creating expense:', newExpense);

    this.userService.createExpense(newExpense).subscribe({
      next: () => this.getExpenses(),
      error: (err) => console.error('Failed to add expense:', err),
    });
  }

 deleteExpense(expenseId: string) {
  this.userService.deleteExpense(expenseId).subscribe({
    next: () => {
      this.getExpenses();
    },
    error: (err) => {
      console.error('Failed to delete expense:', err);
    },
  });
}


  updateTotals() {
    this.incomeTotal = this.expenses
      .filter((e) => e.category === 'income')
      .reduce((sum, e) => sum + e.amount, 0);

    this.savingsTotal = this.expenses
      .filter((e) => e.category === 'savings')
      .reduce((sum, e) => sum + e.amount, 0);

    this.expenseTotal = this.expenses
      .filter((e) => e.category === 'expense')
      .reduce((sum, e) => sum + e.amount, 0);
  }
}
