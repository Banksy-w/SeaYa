import React from "react";

export default function CallToAction() {
  return (
    <div className="w-full relative mt-[-7rem] mb-[8rem] px-4 sm:px-8 md:px-16 lg:px-24 z-[80]">
      {/* NFT卡片容器 */}
      <div className="w-full relative h-[15rem] md:h-[26rem]">
        {/* 使用提供的图片作为NFT卡片，使用绝对定位将其放在蓝色背景上方 */}
        <div className="absolute left-[5rem] top-[8rem] w-[42.75rem] h-[21.75rem] z-[102] hidden md:block">
          <img
            src="/6b0bc49d-a167-443d-9152-fd20db47f500.png"
            alt="NFT Cards"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* 蓝色背景区域 */}
      <div className="w-[95%] md:w-[90%] max-w-[100rem] h-[23rem] py-16 bg-[#4da2ff] rounded-[1.25rem] relative mx-auto z-[100] -mt-[6.25rem] md:mt-[-6.25rem]">
        <div className="flex w-full md:w-[30rem] flex-col gap-5 items-start flex-nowrap relative z-[107] mx-auto md:mx-0 md:ml-auto md:mr-[8%] px-6">
          <div className="flex flex-col gap-3 items-start self-stretch shrink-0 flex-nowrap relative z-[108]">
            <span className="h-auto left-[2rem] self-stretch shrink-0 basis-auto font-['Space_Grotesk'] text-[3rem] font-semibold leading-[1.2] text-[#fff] relative text-left whitespace-nowrap z-[109]">
              Create your event!
            </span>
            <span className="flex left-[2rem] w-full h-auto justify-start items-start self-stretch shrink-0 font-['Space_Grotesk'] text-[1.25rem] font-semibold leading-[1.3] text-[#fff] relative text-left z-[110]">
              Join us at the Sui Ecosystem Crypto Event to network with
              innovators and dive into the future of blockchain!
            </span>
          </div>
          <div className="flex w-[12rem] py-[0.7rem] px-[1.875rem] gap-[0.625rem] left-[2rem] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[3.125rem] relative z-[111] mt-4">
            <span className="flex w-[8.5rem] h-[1.875rem] justify-center items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[1.5rem] font-semibold leading-[1.3] text-[#0079ff] relative text-center whitespace-nowrap z-[112]">
              Get Started
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
