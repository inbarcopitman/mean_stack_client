import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataBoxComponent } from './user-data-box.component';

describe('UserDataBoxComponent', () => {
  let component: UserDataBoxComponent;
  let fixture: ComponentFixture<UserDataBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
