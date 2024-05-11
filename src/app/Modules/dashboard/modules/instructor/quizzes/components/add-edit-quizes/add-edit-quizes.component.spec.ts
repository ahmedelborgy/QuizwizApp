import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditQuizesComponent } from './add-edit-quizes.component';

describe('AddEditQuizesComponent', () => {
  let component: AddEditQuizesComponent;
  let fixture: ComponentFixture<AddEditQuizesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditQuizesComponent]
    });
    fixture = TestBed.createComponent(AddEditQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
