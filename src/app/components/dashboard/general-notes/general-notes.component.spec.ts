import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralNotesComponent } from './general-notes.component';

describe('GeneralNotesComponent', () => {
  let component: GeneralNotesComponent;
  let fixture: ComponentFixture<GeneralNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralNotesComponent]
    });
    fixture = TestBed.createComponent(GeneralNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
