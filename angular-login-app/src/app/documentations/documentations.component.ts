import { Component, OnInit } from '@angular/core';
import { Document } from './documentations.model';
import { DocumentService } from './documentations.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents!: Document[];

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.fetchDocuments();
  }

  fetchDocuments() {
    this.documentService.getDocuments().subscribe(
      (documents: Document[]) => {
        this.documents = documents;
      },
      (error: any) => {
        console.error('Error fetching documents:', error);
      }
    );
  }
}
