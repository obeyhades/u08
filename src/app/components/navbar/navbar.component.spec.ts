import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../services/user.service';
import { BehaviorSubject } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let mockUserService: any;

  beforeEach(async () => {
    mockUserService = {
      userId$: new BehaviorSubject<number>(1)
    };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NavbarComponent],
      providers: [{ provide: UserService, useValue: mockUserService }]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
  });

  it('should display the "Home" link', () => {
    const homeLink = fixture.debugElement.queryAll(By.css('a'))
      .find(el => el.nativeElement.textContent.trim() === 'Home');

    expect(homeLink).toBeTruthy();
    expect(homeLink?.nativeElement.getAttribute('ng-reflect-router-link')).toBe('/mainpage');
  });
});
