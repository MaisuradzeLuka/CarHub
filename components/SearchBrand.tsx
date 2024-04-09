"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { carBrands } from "@/constants";
import { Combobox } from "@headlessui/react";
import Image from "next/image";

interface ISearchBrands {
  brand: string;
  setBrand: (manufacturer: string) => void;
}

const SearchBrand = ({ brand, setBrand }: ISearchBrands) => {
  const [query, setQuery] = useState("");

  const filteredBrands =
    query === ""
      ? carBrands
      : carBrands.filter((brand) => {
          return brand.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={brand} onChange={setBrand}>
      <div className="w-1/2">
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

      <Combobox.Options className="max-h-60 max-w-[350px] overflow-y-scroll mt-4 shadow-lg ring-1 ring-gray-300 rounded-md gap-8 ">
        {filteredBrands.map((brand) => (
          <Combobox.Option key={brand} value={brand} className="my-4">
            {({ active }) => (
              <span
                className={`px-10 py-2 block w-full ${
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
  );
};

export default SearchBrand;
