import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsComponent } from './documentations.component';

describe('DocumentationsComponent', () => {
  let component: DocumentsComponent;
  let fixture: ComponentFixture<DocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsComponent]
    });
    fixture = TestBed.createComponent(DocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
