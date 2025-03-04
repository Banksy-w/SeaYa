import React from "react";

export default function Navbar() {
  return (
    <div className="flex w-full px-4 sm:px-8 md:px-16 lg:px-24 justify-between items-center relative z-[3] mt-[3.3rem] mb-0">
      <span className="h-[31px] font-['Space_Grotesk'] text-[1.5rem] font-bold leading-[1.9rem] text-[#000] relative text-left whitespace-nowrap z-[4]">
        SeaYa
      </span>
      <div className="flex gap-6 items-center shrink-0 flex-nowrap relative z-[5]">
        <div className="flex py-[0.625rem] px-[1.25rem] gap-[0.625rem] justify-center items-center shrink-0 flex-nowrap relative z-[6]">
          <span className="h-[1.25rem] shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#000] relative text-left whitespace-nowrap z-[7]">
            Learn
          </span>
        </div>
        <div className="flex py-[0.625rem] px-[1.25rem] gap-[0.625rem] justify-center items-center shrink-0 flex-nowrap relative z-[8]">
          <span className="h-[1.25rem] shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#000] relative text-left whitespace-nowrap z-[9]">
            Build
          </span>
        </div>
        <div className="flex py-[0.625rem] px-[1.25rem] flex-col gap-[0.625rem] items-start shrink-0 flex-nowrap relative z-10">
          <div className="flex gap-2 items-center self-stretch shrink-0 flex-nowrap relative z-[11]">
            <span className="h-[1.25rem] shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#000] relative text-left whitespace-nowrap z-[12]">
              Tools
            </span>
            <div className="w-[1rem] h-[1rem] shrink-0 bg-[url(/c2b82780-611a-4ece-b11b-848d148cf4e5.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[13]" />
          </div>
        </div>
      </div>
      <div className="flex gap-6 items-center shrink-0 flex-nowrap relative z-[14]">
        <div className="flex py-[0.625rem] px-[1.25rem] gap-[0.625rem] justify-center items-center shrink-0 flex-nowrap rounded-[3.125rem] border-solid border border-[#1e1e1e] relative z-[15]">
          <span className="h-[1.25rem] shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#1e1e1e] relative text-left whitespace-nowrap z-[16]">
            Litepaper
          </span>
        </div>
        <div className="flex py-[0.625rem] px-[1.25rem] gap-[0.625rem] justify-center items-center shrink-0 flex-nowrap bg-[#4da2ff] rounded-[3.125rem] relative z-[17]">
          <span className="h-[1.25rem] shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#fff] relative text-left whitespace-nowrap z-[18]">
            Connect wallet
          </span>
        </div>
      </div>
    </div>
  );
}
