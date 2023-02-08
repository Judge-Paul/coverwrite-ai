import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";

export default function Modal(props) {
  const [copied, setCopied] = useState(false)
  return (
    <>
      {props.showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 h-96 overflow-y-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {props.text}
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <CopyToClipboard text={props.text} onCopy={() => setCopied(true)}>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                      {copied ? "Copied!" : "Copy to clipboard"}
                    </button>
                  </CopyToClipboard>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.closeModal}
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
