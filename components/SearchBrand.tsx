"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { carBrands } from "@/constants";
import { Combobox } from "@headlessui/react";
import Image from "next/image";
import SearchButton from "./SearchButton";

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
      <div className="relative flex items-center md:w-1/2 max-h-11">
        <Combobox.Button className="absolute left-5 ">
          <Image src="/car-logo.svg" width={20} height={20} alt="car logo" />
        </Combobox.Button>

        <Combobox.Input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Volkswagen"
          className="bg-light-white w-full outline-none pl-12 py-3 px-4 rounded-l-full max-md:rounded-full text-sm"
        />

        <SearchButton variant="md:invisible" />

        <Combobox.Options className="absolute top-10 max-h-60 w-full overflow-y-scroll mt-4 shadow-lg ring-1 ring-gray-300 bg-white rounded-md gap-8 z-50 ">
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
      </div>
    </Combobox>
  );
};

export default SearchBrand;
