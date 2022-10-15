import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Link } from "react-router-dom";
import { CustomButton } from "./CustomButton";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export function PDFView(props) {
  const { file, name } = props;
  return (
    <div className="px-2">
      <span className="text-primary text-lg tracking-wider px-3">{name}</span>
      <div className="relative shadow-xl rounded-xl border-2 border-gray-2 my-2 pointer-events-none overflow-hidden">
        <Document file={file} className="h-[13rem] overflow-hidden m-2">
          <Page pageNumber={1} scale={0.4} />
        </Document>
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-gray-700 via-transparent rounded-2xl flex justify-center items-center transform translate-y-[60%] hover:translate-y-0 transition-all">
          <a
            href={file}
            rel="noreferrer"
            target="_blank"
            className="text-center font-semibold text-primary bg-white py-2 px-4 rounded cursor-pointer"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}
