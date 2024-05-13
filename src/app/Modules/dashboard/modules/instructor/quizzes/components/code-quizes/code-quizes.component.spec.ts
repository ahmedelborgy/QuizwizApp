import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeQuizesComponent } from './code-quizes.component';

describe('CodeQuizesComponent', () => {
  let component: CodeQuizesComponent;
  let fixture: ComponentFixture<CodeQuizesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeQuizesComponent]
    });
    fixture = TestBed.createComponent(CodeQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
