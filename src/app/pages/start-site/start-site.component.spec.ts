import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartSiteComponent } from './start-site.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('StartSiteComponent', () => {
  let component: StartSiteComponent;
  let fixture: ComponentFixture<StartSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartSiteComponent],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: { snapshot: { paramMap: of({}) } } 
        } 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
