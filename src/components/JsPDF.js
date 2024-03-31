import React from 'react'
import jsPDF from 'jspdf'

const Js_PDF = () => {
    const generatePDF = () => {
        var doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts:true
        }); 
     
        doc.setFont("courier", "normal");
        doc.text(50, 100, "This is the second title.");
        doc.line(10,10,500,11) 
        //doc.setLineMiterLimit(250)
        doc.save("demo.pdf");
      };
  return (
    <div>
       <button onClick={generatePDF} type="primary">
        Download PDF
      </button>
    </div>
  )
}

export default Js_PDF
