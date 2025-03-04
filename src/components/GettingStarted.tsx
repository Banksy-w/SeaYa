import React from "react";

export default function GettingStarted() {
  return (
    <div className="w-full bg-[#011829] relative z-[2] mt-[20rem] mb-0 pb-[4rem]">
      <div className="w-full max-w-3xl font-['Space_Grotesk'] text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-semibold leading-[1.3] relative text-left z-[22] mt-[4rem] px-4 sm:px-8 md:px-16 lg:px-24 mb-0">
        <span className="font-['Space_Grotesk'] text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-normal leading-[1.3] text-[#fff] relative text-left">
          Getting Started on{" "}
        </span>
        <span className="font-['Space_Grotesk'] text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-normal leading-[1.3] text-[#fff] relative text-left">
          Sui Story
        </span>
      </div>
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-8 relative z-[25] mt-[2.5rem] px-4 sm:px-8 md:px-16 lg:px-24 mb-0">
        <div className="w-full md:w-[30%] h-auto aspect-square bg-[url(/72035f10-105d-494a-84ae-4a94b0425a30.png)] bg-cover bg-no-repeat rounded-[1.25rem] relative z-[23]">
          <div className="flex w-full max-w-[80%] flex-col gap-[6rem] items-start flex-nowrap relative z-[26] mt-[3.5rem] ml-[2rem]">
            <div className="w-[3.8rem] h-[3.8rem] shrink-0 bg-[url(/9b8280d0-d545-4f24-a67a-d5ccdb077db8.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[27]" />
            <span className="flex w-full h-auto justify-start items-start self-stretch shrink-0 font-['Space_Grotesk'] text-[2rem] font-normal leading-[1.3] text-[#fff] relative text-left z-[28]">
              Connect your wallet
            </span>
          </div>
        </div>
        <div className="w-full md:w-[30%] h-auto aspect-square bg-[url(/e68a60e2-e211-4951-aa23-2a8db60aad79.png)] bg-cover bg-no-repeat rounded-[1.25rem] relative z-[24]">
          <div className="flex w-full max-w-[80%] flex-col gap-[6rem] items-start flex-nowrap relative z-[29] mt-[3.5rem] ml-[2rem]">
            <div className="w-[3.8rem] h-[3.8rem] shrink-0 bg-[url(/70cd970e-4960-4e8c-8566-690e2076773d.svg)] bg-cover bg-no-repeat relative overflow-hidden z-30" />
            <span className="flex w-full h-auto justify-start items-start shrink-0 font-['Space_Grotesk'] text-[2rem] font-normal leading-[1.3] text-[#fff] relative text-left z-[31]">
              Create & Publish Events
            </span>
          </div>
        </div>
        <div className="w-full md:w-[30%] h-auto aspect-square bg-[url(/845e423c-93ff-4921-9e8b-470fd4e71289.png)] bg-cover bg-no-repeat rounded-[1.25rem] relative z-[25]">
          <div className="flex w-full max-w-[80%] flex-col gap-[6rem] items-start flex-nowrap relative z-[32] mt-[3.5rem] ml-[2rem]">
            <div className="w-[3.8rem] h-[3.8rem] shrink-0 bg-[url(/f37b8cc8-aa7c-4eda-a4ec-21f8cbed6aff.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[33]" />
            <span className="flex w-full h-auto justify-start items-start self-stretch shrink-0 font-['Space_Grotesk'] text-[2rem] font-normal leading-[1.3] text-[#fff] relative text-left z-[34]">
              Engage with other events
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
