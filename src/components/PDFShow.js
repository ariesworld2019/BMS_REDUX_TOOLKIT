import React from 'react'
import Generate_PDF from './GeneratePDF'
import { PDFDownloadLink } from '@react-pdf/renderer';

const PDF_Show = () => {
  return (
    <div>
        <PDFDownloadLink document={<Generate_PDF></Generate_PDF>} fileName='FORM'>
            {({loading})=>loading?(<button>Loading Document...</button>):(<button>Download</button>)}
        </PDFDownloadLink>
       <Generate_PDF></Generate_PDF>
    </div>
  )
} 
export default PDF_Show
