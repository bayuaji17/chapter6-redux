import React from "react";

export const NewPage = () => {
  return (
    <div className="h-screen max-w-full space-y-2 p-5 text-white text-center">
      <div className="flex justify-end">
        <div className="flex w-1/6 justify-center items-center bg-red-600 h-12 md:w-full">
          <p className="hidden md:block lg:block">Merah</p>{" "}
        </div>
      </div>
      <div className="flex h-full w-full flex-col gap-2 lg:flex-row">
        <div className="h-[40%] bg-purple-600 w-full md:order-last lg:order-none lg:h-[100%]">Ungu</div>
        <div className="flex-col w-full h-full space-y-2 ">
        <div className="bg-green-500 h-[10rem] hidden md:block lg:h-[20rem] ">Hijau</div>
          <div className="flex flex-row w-full gap-2 h-[10rem] md:flex-row-reverse md:h-[18rem] lg:h-[21.2rem]">
            <div className="bg-pink-500 w-[50%] ">Pink</div>
            <div className="bg-blue-500 w-[50%] ">Biru</div>
          </div>
          <div className="bg-green-500 h-[10rem] md:hidden">Hijau</div>
        </div>
      </div>
    </div>
  );
};
