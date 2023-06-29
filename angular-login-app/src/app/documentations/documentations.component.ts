import { Component, OnInit } from '@angular/core';
import { Document } from './documentations.model';
import { DocumentService } from './documentations.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documentations.component.html',
  styleUrls: ['./documentations.component.css']
})
export class DocumentsComponent implements OnInit {
  //documents!: Document[];
  documents: Map<string, Document> = new Map<string, Document>();

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.fetchDocuments();
  }

  fetchDocuments() {
    this.documentService.getDocuments().subscribe((data: Map<string, Document>) => {
      this.documents = data;
    });
  }
}


