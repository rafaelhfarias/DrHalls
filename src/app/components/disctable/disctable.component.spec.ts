import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisctableComponent } from './disctable.component';

describe('DisctableComponent', () => {
  let component: DisctableComponent;
  let fixture: ComponentFixture<DisctableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisctableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisctableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
