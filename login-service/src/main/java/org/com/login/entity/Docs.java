package org.com.login.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "documents")
public class Docs {
    @Id
    private String DocumentID;
	private String DocumentName;
    public byte[] getDocument() {
		return Document;
	}
	public void setDocument(byte[] document) {
		Document = document;
	}
	private byte[] Document;
    private String UploadUser;
    private String UploadDate;
    public String getDocumentID() {
		return DocumentID;
	}
	public void setDocumentID(String documentID) {
		DocumentID = documentID;
	}
	public String getDocumentName() {
		return DocumentName;
	}
	public void setDocumentName(String documentName) {
		DocumentName = documentName;
	}
	
	/*
	 * public void setDocument(byte[] bs) { Document = bs; }
	 */
	public String getUploadUser() {
		return UploadUser;
	}
	public void setUploadUser(String uploadUser) {
		UploadUser = uploadUser;
	}
	public String getUploadDate() {
		return UploadDate;
	}
	public void setUploadDate(String uploadDate) {
		UploadDate = uploadDate;
	}
     
    

}

