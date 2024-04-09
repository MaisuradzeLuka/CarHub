"use client";

import { ICar } from "@/types";
import { generateCarImageUrl } from "@/utils";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

interface ICarModal {
  isOpen: boolean;
  setIsOpen: () => void;
  car: ICar;
}

const CarModal = ({ isOpen, setIsOpen, car }: ICarModal) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-25 "
            aria-hidden="true"
          >
            <button className="absolute cursor-pointer top-6 right-5">
              <Image
                src="/close.svg"
                alt="close button"
                width={20}
                height={20}
              />
            </button>
          </div>
        </Transition.Child>

        <div className="fixed inset-0 w-full flex justify-center items-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className=" w-full xs:w-[500px] max-h-[600px] bg-white z-30 overflow-y-auto mx-3 px-6 py-8 rounded-2xl">
              <div className=" ">
                <div className="relative h-40 bg-pattern-bg rounded-lg bg-cover">
                  <Image
                    src={generateCarImageUrl(car, "01")}
                    alt="modal car image"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                <div className="flex justify-between gap-4 mt-5 w-full h-auto">
                  <div className="relative bg-primary-blue rounded-lg w-[33%] h-[100px]">
                    <Image
                      src={generateCarImageUrl(car, "29")}
                      alt="modal car image top"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="relative bg-primary-blue rounded-lg w-[33%] h-[100px]">
                    <Image
                      src={generateCarImageUrl(car, "33")}
                      alt="modal car image front"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="relative bg-primary-blue rounded-lg w-[33%] h-[100px]">
                    <Image
                      src={generateCarImageUrl(car, "13")}
                      alt="modal car image rear"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-5 mt-10">
                <Dialog.Title className="capitalize text-2xl font-medium">
                  {car?.make} {car?.model}
                </Dialog.Title>

                <div className="w-full flex justify-between items-center">
                  <h4 className="text-gray-600">Class</h4>
                  <span className="capitalize">{car?.class}</span>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h4 className="text-gray-600">Year</h4>
                  <span>{car?.year}</span>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h4 className="text-gray-600">Transmition</h4>
                  <span>
                    {car?.transmission === "a" ? "Automatic" : "Manual"}
                  </span>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h4 className="text-gray-600">Displacement</h4>
                  <span>{car?.displacement}</span>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h4 className="text-gray-600">Cylinders</h4>
                  <span>{car?.cylinders}</span>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h4 className="text-gray-600">Drive</h4>
                  <span className="uppercase">{car?.drive}</span>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h4 className="text-gray-600">Fuel Type</h4>
                  <span>{car?.fuel_type}</span>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h4 className="text-gray-600">City Mpg</h4>
                  <span>{car?.city_mpg}</span>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h4 className="text-gray-600">Highway Mpg</h4>
                  <span>{car?.highway_mpg}</span>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h4 className="text-gray-600">Combinated Mpg</h4>
                  <span>{car?.combination_mpg}</span>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarModal;
