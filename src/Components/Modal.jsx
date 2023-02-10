import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import jsPDF from "jsPDF";
import { FaDownload } from "react-icons/fa"
const doc = new jsPDF("p", "in", "a4");

export default function Modal({ showModal, closeModal, text }) {
  const [editableText, setEditableText] = useState(text);
  const [copied, setCopied] = useState(false)

  function savePDF(text) {
    let lMargin=20;
    let rMargin=20;
    let pdfInMM=210;  // width of A4 in mm
    let doc = new jsPDF("p","mm","a4");
    let lines = doc.splitTextToSize(text, (pdfInMM-lMargin-rMargin));
    doc.text(lMargin, 20, lines);
    doc.save('Cover Letter.pdf');
  }

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full md:w-[600px] bg-white outline-none focus:outline-none">
                <div className="relative p-6 h-96">
                  <textarea
                    className="my-4 text-slate-500 text-lg leading-relaxed resize-none outline-none focus:outline-none w-full h-full"
                    value={editableText}
                    onChange={(e) => setEditableText(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button 
                    onClick={() => savePDF(editableText)}
                    className="bg-blue-500 text-white font-bold py-3 px-4 rounded hover:bg-blue-700 mr-3"
                  >
                    <FaDownload />
                  </button>
                  <CopyToClipboard text={editableText} onCopy={() => setCopied(true)}>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                      {copied ? "Copied!" : "Copy to clipboard"}
                    </button>
                  </CopyToClipboard>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}