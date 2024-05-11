import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewQuestionsComponent } from './add-edit-view-questions.component';

describe('AddEditViewQuestionsComponent', () => {
  let component: AddEditViewQuestionsComponent;
  let fixture: ComponentFixture<AddEditViewQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditViewQuestionsComponent]
    });
    fixture = TestBed.createComponent(AddEditViewQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
