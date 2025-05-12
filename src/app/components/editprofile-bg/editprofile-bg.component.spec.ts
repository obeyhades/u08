import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileBgComponent } from './editprofile-bg.component';

describe('EditprofileBgComponent', () => {
  let component: EditprofileBgComponent;
  let fixture: ComponentFixture<EditprofileBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditprofileBgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprofileBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
