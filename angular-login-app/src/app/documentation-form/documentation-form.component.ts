import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentation-form',
  templateUrl: './documentation-form.component.html',
  styleUrls: ['./documentation-form.component.css']
})
export class DocumentationFormComponent {
  documentName!: string;
  document!: File;
  uploadUser!: string;
  uploadDate!: Date;
  
  constructor(private http: HttpClient, private router: Router) { }

  onFileSelected(event: any) {
    this.document = event.target.files[0];
  }

  onSubmit() {
    // Perform form submission logic here
    console.log('Document Name:', this.documentName);
    console.log('Document:', this.document);
    console.log('Upload User:', this.uploadUser);
    console.log('Upload Date:', this.uploadDate);

    
     // Prepare the documentation request payload
  const documentationRequest = {
    documentName: this.documentName,
    document: this.document,
    uploadUser: this.uploadUser,
    uploadDate: this.uploadDate
  };
   // Send the documentation request to the server
   this.http.post('http://localhost:8080/api/documents/upload', documentationRequest).subscribe(
    (response) => {
      // Handle successful documentation response
      console.log('Documentation submitted:', response);

      // Reset the form
      this.documentName = '';
      this.document ;
      this.uploadUser = '';
      this.uploadDate ;
    },
    (error) => {
      // Handle documentation error
      console.error('Documentation submission error:', error);
    }
  );
  this.router.navigate(['/documentations']);
    
  }
}

