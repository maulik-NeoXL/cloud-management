import React from "react";
import {HiChip, HiPhone, HiSupport} from "react-icons/hi";
import imgSup from "../assets/support.jpg";

export default function Support()
{
  return (
    <div className="w-full h-screen py-16">
      <div className="w-full h-full bg-gray-900/90 absolute">
        <img src={imgSup} alt={""} className="w-full h-full object-cover mix-blend-overlay" />
      </div>
      <div className="bg-img_bg flex flex-col items-center mt-14 relative">
        <h1 className="text-gray-300 font-bold text-3xl"> SUPPORT</h1>
        <h1 className="text-5xl py-6 text-white font-bold"> Finding the right team</h1>
        <p className="text-gray-300 text-3xl px-8 justify-evenly"> Lorem ipsum dolor sit amet, consectetur
          adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris.</p>
        <div className="flex mt-36">
          <div className="flex px-4 relative">
            <div className="flex flex-col border border-gray-200 rounded-2xl bg-white px-8 shadow-xl">
              <div className="bg-indigo-600 p-4 absolute mt-[-30px] rounded-xl">
                <HiPhone size={32} color={"white"} />
              </div>
              <div className="flex flex-col py-[72px] gap-6">
                <h1 className="text-3xl font-bold"> Sales </h1>
                <p className="text-xl text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore
                </p>
              </div>
            </div>
          </div>

          <div className="flex px-4 relative">
            <div className="flex flex-col border border-gray-200 rounded-2xl bg-white px-8 shadow-xl">
              <div className="bg-indigo-600 p-4 absolute mt-[-30px] rounded-xl">
                <HiSupport size={32} color={"white"} />
              </div>
              <div className="flex flex-col py-[72px] gap-6">
                <h1 className="text-3xl font-bold"> Technical Support </h1>
                <p className="text-xl text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore
                </p>
              </div>
            </div>
          </div>

          <div className="flex px-4 relative">
            <div className="flex flex-col border border-gray-200 rounded-2xl bg-white px-8 shadow-xl">
              <div className="bg-indigo-600 p-4 absolute mt-[-30px] rounded-xl">
                <HiChip size={32} color={"white"} />
              </div>
              <div className="flex flex-col py-[72px] gap-6">
                <h1 className="text-3xl font-bold"> Media Inquiries </h1>
                <p className="text-xl text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
