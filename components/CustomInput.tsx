"use client";

import { useState } from "react";
import { carBrands } from "@/constants";
import { Combobox } from "@headlessui/react";
import Image from "next/image";

const CustomInput = () => {
  const [query, setQuery] = useState("");
  const [formValue, setFormValue] = useState("");

  console.log(formValue);

  const filteredBrands =
    query === ""
      ? carBrands
      : carBrands.filter((brand) => {
          return brand.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <form className="xl:w-[900px]">
      <Combobox value={formValue} onChange={setFormValue}>
        <div className="flex item-center max-w-[750px] bg-light-white  py-2 px-6 rounded-full relative">
          <Combobox.Button className="absolute left-1 top-[10px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>

          <Combobox.Input
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Volkswagen"
            className="bg-transparent outline-none ml-10"
          />
        </div>

        <Combobox.Options className="max-h-60 overflow-y-scroll mt-4 shadow-lg ring-1 ring-gray-300 rounded-md  py-3">
          {filteredBrands.map((brand) => (
            <Combobox.Option key={brand} value={brand}>
              {({ active, selected }) => (
                <span
                  className={`px-10 py-2 my-3 ${
                    active ? "bg-blue-500 text-white" : "bg-white text-black"
                  } `}
                >
                  {brand}
                </span>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </form>
  );
};

export default CustomInput;
