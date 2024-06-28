"use client";
import React, { useState, useEffect } from "react";
import pdf from "../../Assets/JagadeeshB.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Button } from "@/components/ui/moving-border";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="container mx-auto py-12 resume-section">
      <div className="flex justify-center my-4">
        <Button
          borderRadius="1.75rem"
          as="a"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white  dark:bg-zinc-600 text-black px-5 py-3 dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <AiOutlineDownload className="inline mr-2" />
          Download CV
        </Button>
      </div>

      <div className="resume">
        <Document file={pdf} className="flex justify-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>
    </div>
  );
}

export default ResumeNew;
