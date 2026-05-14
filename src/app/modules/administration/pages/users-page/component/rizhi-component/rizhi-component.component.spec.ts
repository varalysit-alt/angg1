import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RizhiComponentComponent } from './rizhi-component.component';

describe('RizhiComponentComponent', () => {
  let component: RizhiComponentComponent;
  let fixture: ComponentFixture<RizhiComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RizhiComponentComponent]
    });
    fixture = TestBed.createComponent(RizhiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
