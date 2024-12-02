import React from "react";
import './Templates.css'
const pdfDocuments = [
  { title: "Document 1", description: "Description for Document 1", file: "/docs/doc1.pdf" },
  { title: "Document 2", description: "Description for Document 2", file: "/docs/doc2.pdf" },
  { title: "Document 3", description: "Description for Document 3", file: "/docs/doc3.pdf" },
  { title: "Document 4", description: "Description for Document 4", file: "/docs/doc4.pdf" },
  { title: "Document 5", description: "Description for Document 5", file: "/docs/doc5.pdf" },
  { title: "Document 6", description: "Description for Document 6", file: "/docs/doc6.pdf" },
  { title: "Document 6", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", file: "/docs/doc6.pdf" },

];

export default function DocumentCards(){
  return (
    <div className="document-grid">
      {pdfDocuments.map((doc, index) => (
        <div className="document-card" key={index}>
          <h3 className="title">{doc.title}</h3>
          <p className="info">{doc.description}</p>
          <a href={doc.file} download className="download-btn">
            Download
          </a>
        </div>
      ))}
    </div>
  );
};
