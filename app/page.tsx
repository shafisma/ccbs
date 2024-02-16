"use client"
import * as React from "react";
import Home from "@/app/pricing/meta";
import Sshot from "./pricing/sshot";
import Tw from "./tw";
import { UserButton } from "@clerk/nextjs";

function MyComponent(props: any) {
  return (
    <>
    <div className="flex bg-white top-0 right-0 absolute py-5 px-5">
    <UserButton afterSignOutUrl="/"/>
    </div>
    <div className="flex flex-col items-center bg-white">
      <br/>
      <br/>
      <img
        loading="lazy"
        src="wallet.svg"
        className="mt-10 w-16 aspect-square"
      />
      <div className="mt-6 text-7xl font-bold tracking-tighter text-center whitespace-nowrap leading-[84.7px] text-neutral-800 max-md:text-4xl">
        The Expense Tracker
      </div>
      <div className="flex gap-1.5 justify-between items-center px-5 mt-3.5 ml-14 max-w-full text-7xl font-bold tracking-tighter text-center whitespace-nowrap leading-[84.24px] text-neutral-800 w-[637px] max-md:flex-wrap max-md:text-4xl">
        <Tw/>
      </div>
      <center><Home /></center>

      <div className="mt-8 text-xs tracking-normal leading-4 text-center text-gray-600 whitespace-nowrap">
        For Android and Windows
      </div>
      <div className="mt-6 text-xs tracking-normal leading-5 text-center text-blue-700">
        By downloading Taka, you agree to the{" "}
        <span className="text-blue-700">Shafi Cloud Terms of Service</span> and
        <br />
        <span className="text-blue-700">
          Taka Additional Terms of Service
        </span>
        </div>
      <div className="flex gap-1 px-5 tracking-tighter text-center mt-[48px] max-md:mt-10">
        <div className="grow self-start mt-3.5 text-6xl font-bold leading-[72px] text-neutral-800 max-md:text-4xl">
          Stay{" "}
        </div>
        <div className="flex gap-1 justify-between px-2 text-5xl font-medium text-blue-700 whitespace-nowrap bg-indigo-50 leading-[72.42px] rounded-[48px] max-md:text-4xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe1fb8d672e8bd7e9de879ee67b2751c2cbf17665babe0798a6ccf6725f1c060?apiKey=f222e3c78b6e4df48ce9381ddd28589a&"
            className="aspect-square w-[72px]"
          />
          <div className="grow my-auto max-md:text-4xl">Secure</div>
        </div>
      </div>
      <div className="mt-3 text-6xl font-bold tracking-tighter text-center leading-[72.57px] text-neutral-800 max-md:max-w-full max-md:text-4xl">
        while you track your expenses
      </div>
      <div className="mt-20 max-w-full w-[1292px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col pt-12 bg-blue-600 rounded-3xl max-md:max-w-full">
                <div className="flex flex-col px-20 text-white max-md:px-5 max-md:max-w-full">
                  <div className="text-sm font-medium tracking-wide leading-6 uppercase max-md:mr-0.5 max-md:max-w-full">
                    Additional Security
                  </div>
                  <div className="self-end mt-8 text-4xl font-bold tracking-tighter leading-10 max-md:mr-0.5">
                    Use Face Id / Fingerprint on
                    <br />
                    The App
                  </div>
                </div>
                <div className="flex overflow-hidden relative flex-col items-end pt-12 pr-6 pb-6 pl-16 mt-11 w-full min-h-[432px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                </div>
              </div>
              <div className="flex flex-col pt-12 pr-6 pb-6 pl-16 mt-11 bg-white rounded-3xl border border-gray-300 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-sm font-medium tracking-wide leading-6 text-gray-600 uppercase max-md:max-w-full">
                  ENHANCED SAFE BROWSING
                </div>
                <div className="mt-8 text-5xl font-bold tracking-tighter leading-[56px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                  Explore with the
                  <br />
                  confidence that
                  <br />
                  you are staying safer
                </div>{" "}
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col pt-12 pr-6 pb-6 pl-16 bg-indigo-50 rounded-3xl max-md:px-5 max-md:max-w-full">
                <div className="text-sm font-medium tracking-wide leading-6 text-gray-600 uppercase max-md:max-w-full">
                  SAFETY CHECK
                </div>{" "}
                <div className="mt-8 text-5xl font-bold tracking-tighter leading-[56px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                  Check your safety
                  <br />
                  level in real time with
                  <br />
                  just one click.
                </div>{" "}
              </div>{" "}
              <div className="flex flex-col pt-12 mt-11 bg-blue-800 rounded-3xl max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-20 text-white max-md:px-5 max-md:max-w-full">
                  <div className="text-sm font-medium tracking-wide leading-6 uppercase max-md:max-w-full">
                    PRIVACY GUIDE
                  </div>{" "}
                  <div className="mt-7 text-4xl font-bold tracking-tighter leading-10 max-md:max-w-full">
                    Keep your privacy under
                    <br />
                    your control with easy-to-
                    <br />
                    use settings.
                  </div>
                </div>{" "}
                <div className="flex overflow-hidden relative flex-col items-end pt-12 pr-6 pb-6 pl-16 mt-11 w-full min-h-[388px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Sshot/>
      <div className="mt-20 max-w-full w-[1292px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
          </div>{" "}
        </div>
      </div>{" "}
      <div className=" flex justify-center items-center self-stretch px-16 py-10 w-full bg-gray-50 max-md:px-5 max-md:max-w-full">
        <div className="pl-40 pt-12 max-w-full bg-blue-600 rounded-3xl w-[1292px] max-md:px-5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center self-stretch my-auto text-center text-white max-md:mt-10 max-md:max-w-full">
                <center><div className="text-6xl font-bold tracking-tighter leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
                  Take your App
                  <br />
                  with you
                </div></center>
                <Home/>
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}
export default MyComponent


