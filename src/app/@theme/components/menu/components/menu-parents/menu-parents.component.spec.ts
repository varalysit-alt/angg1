import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuParentsComponent } from './menu-parents.component';

describe('MenuParentsComponent', () => {
  let component: MenuParentsComponent;
  let fixture: ComponentFixture<MenuParentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuParentsComponent]
    });
    fixture = TestBed.createComponent(MenuParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
