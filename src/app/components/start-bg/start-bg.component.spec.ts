import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartBgComponent } from './start-bg.component';

describe('StartBgComponent', () => {
  let component: StartBgComponent;
  let fixture: ComponentFixture<StartBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartBgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
