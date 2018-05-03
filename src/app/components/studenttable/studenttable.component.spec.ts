import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttableComponent } from './studenttable.component';

describe('StudenttableComponent', () => {
  let component: StudenttableComponent;
  let fixture: ComponentFixture<StudenttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudenttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
