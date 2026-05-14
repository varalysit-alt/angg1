import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChildrensComponent } from './menu-childrens.component';

describe('MenuChildrensComponent', () => {
  let component: MenuChildrensComponent;
  let fixture: ComponentFixture<MenuChildrensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuChildrensComponent]
    });
    fixture = TestBed.createComponent(MenuChildrensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
