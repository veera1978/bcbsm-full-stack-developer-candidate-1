import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from './documentations.model';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {
  private apiUrl = 'http://localhost:8080/api/documents/listdocument';
  

  constructor(private http: HttpClient) { }

  getDocuments(): Observable<Map<string, Document>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('user:95be05fb-b93f-4637-ba5c-f07a00986ed5')
      })
    };
    return this.http.get<Map<string, Document>>(this.apiUrl,httpOptions);
    
  }
}
