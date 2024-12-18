import React, { useEffect, useState } from "react";
import './Templates.css';

export default function DocumentCards() {
  const [pdfDocuments, setPdfDocuments] = useState([]);

  useEffect(() => {
    // Fetch JSON file from the public folder
    fetch(`${process.env.PUBLIC_URL}/notary_templates/description.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load document templates");
        }
        return response.json();
      })
      .then((data) => {
        setPdfDocuments(data);
      })
      .catch((error) => {
        console.error("Error fetching templates:", error);
      });
  }, []);

  return (
    <div className="document-grid">
      {pdfDocuments.map((doc, index) => (
        <div className="document-card" key={index}>
          <h3 className="title">{doc.title}</h3>
          <p className="info">{doc.description}</p>
          <a href={`${process.env.PUBLIC_URL}/${doc.template}`} download className="download-btn">
            Download
          </a>
        </div>
      ))}
    </div>
  );
}
