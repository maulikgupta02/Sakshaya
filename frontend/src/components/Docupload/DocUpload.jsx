// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import './DocUpload.css'

// export default function PdfUploader(){
//   const [pdfFile, setPdfFile] = useState(null);

//   const onDrop = (acceptedFiles) => {
//     setPdfFile(acceptedFiles[0]);
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: '.pdf',
//   });

//   return (
//     <div className="pdf-uploader">
//       <div {...getRootProps({ className: 'dropzone' })} style={styles.dropzone}>
//         <input {...getInputProps()} />
//         <h4>Drag and drop your Notary PDF here, or click to select one</h4>
//       </div>

//       {pdfFile ? (
//         <div>
//           <h4>Uploaded File:</h4>
//           <p>{pdfFile.name}</p>
//         </div>
//       ) : (
//         <p>No file uploaded yet.</p>
//       )}
//     </div>
//   );
// };

// const styles = {
//   dropzone: {
//     border: '2px dashed #007BFF',
//     padding: '20%',
//     textAlign: 'center',
//     cursor: 'pointer',
//   },
// };

import React from "react";
import { useDropzone } from "react-dropzone";
import "./DocUpload.css";

export default function PdfUploader({ onFileUpload }) {
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      onFileUpload(file); // Notify the parent about the uploaded file
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf",
  });

  return (
    <div className="pdf-uploader">
      <div {...getRootProps({ className: "dropzone" })} style={styles.dropzone}>
        <input {...getInputProps()} />
        <h4>Drag and drop your Notary PDF here, or click to select one</h4>
      </div>
    </div>
  );
}

const styles = {
  dropzone: {
    border: "2px dashed #007BFF",
    padding: "20%",
    textAlign: "center",
    cursor: "pointer",
  },
};
