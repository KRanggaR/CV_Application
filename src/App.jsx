import React, { useState, useRef } from "react";
import ControlPanel from "./components/ControlPanel";
import DetailForm from "./components/DetailForm";
import ResumePreview from "./components/ResumePreview";
import "../src/styles/app.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App() {
  const [formData, setFormData] = useState({
    personal: {
      fullname: "",
      email: "",
      phone: "",
      address: "",
      summary: "",
    },
    education: [],
    experience: [],
  });

  const [image, setImage] = useState('');

  const printRef = useRef();

  const handleDownloadPdf = async () => {

    // This line accesses the printRef 
    // (a reference to the DOM element you want to export as a PDF).
    const element = printRef.current;
    if (!element) return;

    // the cloneNode(true) method creates a deep clone of the element
    //  To manage height while download because canva only 
    // prints whatever is visible on display window ignoring the scroll
    const clonedElement = element.cloneNode(true);
    clonedElement.style.maxHeight = "none";
    clonedElement.style.overflow = "visible";
    clonedElement.style.height = "auto";
    clonedElement.style.width = getComputedStyle(element).width;

    // A new div is created (hiddenContainer), which will hold the cloned element.
    // The container is positioned off-screen 
    // to ensure it doesn't interfere with the visible page layout.
    const hiddenContainer = document.createElement("div");
    hiddenContainer.style.position = "fixed";
    hiddenContainer.style.top = "-9999px";
    hiddenContainer.style.left = "-9999px";
    hiddenContainer.appendChild(clonedElement);
    document.body.appendChild(hiddenContainer);

    // Rendering the Cloned Element as a Canvas Image
    const canvas = await html2canvas(clonedElement, {
      scale: 2,
      useCORS: true,
    });

    // Getting Image Data from the Canvas
    const imgData = canvas.toDataURL("image/png");

    // Creating the PDF
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "letter", 
    });

    // Getting Page Dimensions
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Calculating the Scaling for the Image
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // Calculate scale ratio to fit within page
    const scale = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
    const scaledWidth = imgWidth * scale;
    const scaledHeight = imgHeight * scale;

    // Setting the Margin and Adding the Image to the PDF
    const marginX = (pageWidth - scaledWidth) / 2;
    const marginY = 0;
    pdf.addImage(imgData, "PNG", marginX, marginY, scaledWidth, scaledHeight);
    pdf.save("resume.pdf");

    // The hidden container is removed from the DOM to clean up after the process, as it's no longer needed
    document.body.removeChild(hiddenContainer);
  };

  return (
    <>
      <div className="app-wrapper">
        <ControlPanel
          setFormData={setFormData}
          setImage={setImage}
          handleDownloadPdf={handleDownloadPdf}
        />
        <DetailForm
          formData={formData}
          setFormData={setFormData}
          setImage={setImage}
        />
        <ResumePreview formData={formData} image={image} printRef={printRef} />
      </div>
    </>
  );
}

export default App;
