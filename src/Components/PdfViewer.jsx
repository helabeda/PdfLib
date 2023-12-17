import { useState } from 'react';
import {  pdfjs } from 'react-pdf';
import { PDFDocument } from 'pdf-lib';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const MyPdfViewer = () => {
  const [file, setFile] = useState(null);
  const [modifiedPdf, setModifiedPdf] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [setImageUrl] = useState(null);


  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);


    const existingPdfBytes = await selectedFile.arrayBuffer();
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const modifiedPdfBytes = await pdfDoc.save();
    setModifiedPdf(modifiedPdfBytes);
  };

  const handleImageUpload = async (event) => {
    const newImageFile = event.target.files[0];
    setImageFile(newImageFile);

    const imageUrl = URL.createObjectURL(newImageFile);
    setImageUrl(imageUrl);
  };

  const handleAddImage = async () => {
    if (imageFile && modifiedPdf) {
      const pdfDoc = await PDFDocument.load(modifiedPdf);
  
      let image;
  
      if (imageFile.type.startsWith('image/')) {
        // Check for specific image types
        if (imageFile.type === 'image/png') {
          const imageBytes = await readImageFile(imageFile);
          image = await pdfDoc.embedPng(imageBytes);
        } else if (imageFile.type === 'image/jpeg' || imageFile.type === 'image/jpg') {
          const imageBytes = await readImageFile(imageFile);
          image = await pdfDoc.embedJpg(imageBytes);
        } else {
          console.error('Unsupported image type');
          return;
        }
  
        // Set initial image position
        const initialImagePosition = { x: 100, y: 100 };
  
        const firstPage = pdfDoc.getPage(0);
        const { height } = firstPage.getSize();
  
        const imageDims = image.scale(0.5);
        const xPos = initialImagePosition.x;
        const yPos = height - initialImagePosition.y - imageDims.height;
  
        firstPage.drawImage(image, {
          x: xPos,
          y: yPos,
          width: imageDims.width,
          height: imageDims.height,
        });
  
        const updatedPdfBytes = await pdfDoc.save();
        setModifiedPdf(updatedPdfBytes);
      }
    }
  };

  const readImageFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(new Uint8Array(reader.result));
      reader.readAsArrayBuffer(file);
    });
  };

  const modifiedPdfBlob = new Blob([new Uint8Array(modifiedPdf)], { type: 'application/pdf' });
  const modifiedPdfUrl = URL.createObjectURL(modifiedPdfBlob);


  return (
    <div>
      <input type="file" onChange={handleFileChange} className='input-file'/>
      {file && (
        <div>
          <div className='import-file'>
            <input type="file" onChange={handleImageUpload}  className='input-file'/>
            <button onClick={handleAddImage}  className='btn-file'>Add Image</button>
          </div>
          {modifiedPdf && (
            <iframe src={modifiedPdfUrl} title="Modified PDF" width="100%" height="500px" />
          )}
        </div>
      )}
    </div>
  );
};

export default MyPdfViewer;
