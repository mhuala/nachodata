"use client"
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const TECollapse = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);

const PowerBi = ({url}) => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <>
      <div id="accordionExample" className="mt-8">
        <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h1 className="mb-0 font-lulo" id="headingOne">
            <button
              className={`${
                activeElement === "element1" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
              } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="flex gap-4">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/2048px-New_Power_BI_Logo.svg.png" className="w-6 h-6" width={0} height={0}/>
                <span>Reporte PowerBI</span>
              </div>
              <span
                className={`${
                  activeElement === "element1"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529]  dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h1>
          <TECollapse
            show={activeElement === "element1"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
          <iframe title="reporte-nombres" style={{width:"100%",height:"500px"}} src={url} frameborder="0" allowFullScreen="true"></iframe>
          </TECollapse>
        </div>
      </div>
    </>
    );
}

export default PowerBi;