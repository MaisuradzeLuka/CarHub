"use client";

import Image from "next/image";

import { Listbox } from "@headlessui/react";
import { Fragment, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface IFilterCategories {
  options: { id: string; value: string }[];
  title: string;
}

const FilterCategories = ({ title, options }: IFilterCategories) => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleFilterChange = (e: { id: string; value: string }) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.delete(title);

    if (e.id !== "year" && e.id !== "fuel") {
      searchParams.append(title, e.value.toLocaleLowerCase());
    }

    const newPath = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPath, { scroll: false });
  };

  return (
    <Listbox
      value={selectedOption}
      onChange={(e) => {
        setSelectedOption(e);
        handleFilterChange(e);
      }}
      as={Fragment}
    >
      <div className="relative">
        <Listbox.Button className="flex justify-between items-center border border-gray-400 rounded-xl shadow-lg w-40 max-h-[44px] py-3 px-4 capitalize">
          {selectedOption.value}

          <Image
            src="/chevron-up-down.svg"
            alt="select button"
            width={26}
            height={26}
          />
        </Listbox.Button>
        <Listbox.Options className="absolute flex flex-col gap-2 top-14 border border-gray-400 rounded-lg w-full bg-white max-h-50 overflow-y-scroll py-2 z-50">
          {options.map((option) => (
            <Listbox.Option key={option.id} value={option} as={Fragment}>
              {({ active }) => (
                <li
                  className={`py-2 px-4 cursor-pointer capitalize  ${
                    active ? "bg-blue-600 text-white" : "bg-white"
                  }`}
                >
                  {option.value}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default FilterCategories;
