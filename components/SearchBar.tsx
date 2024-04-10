"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SearchBrand from "./SearchBrand";
import SearchButton from "./SearchButton";

const SearchBar = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchParams = new URLSearchParams(window.location.search);

    searchParams.delete("limit");

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (brand) {
      searchParams.set("make", brand);
    } else {
      searchParams.delete("make");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <form className="xl:w-[900px]" onSubmit={handleSubmit}>
      <div className="relative flex flex-col md:flex-row item-center gap-4 md:gap-0 max-w-[750px]  py-2 rounded-full">
        <SearchBrand brand={brand} setBrand={setBrand} />

        <div className="relative flex-1 flex items-center gap-4 md:w-1/2 max-h-11">
          <Image
            src="/model-icon.png"
            alt="car model"
            width={20}
            height={20}
            className="absolute left-5"
          />
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="bg-light-white w-full outline-none pl-12 py-3 px-4 text-sm rounded-r-full max-md:rounded-full"
            placeholder="Touareg"
          />

          <SearchButton />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
