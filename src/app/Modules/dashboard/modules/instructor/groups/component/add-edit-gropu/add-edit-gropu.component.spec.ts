import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGropuComponent } from './add-edit-gropu.component';

describe('AddEditGropuComponent', () => {
  let component: AddEditGropuComponent;
  let fixture: ComponentFixture<AddEditGropuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditGropuComponent]
    });
    fixture = TestBed.createComponent(AddEditGropuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
