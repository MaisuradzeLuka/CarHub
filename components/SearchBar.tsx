"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchBrand from "./SearchBrand";

const SearchBar = () => {
  const [brand, setBrand] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    // if (model) {
    //   searchParams.set("model", model);
    // } else {
    //   searchParams.delete("model");
    // }

    if (brand) {
      searchParams.set("brand", brand);
    } else {
      searchParams.delete("brand");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <form className="xl:w-[900px]" onSubmit={handleSubmit}>
      <div className="flex item-center max-w-[750px] bg-light-white  py-2 px-6 rounded-full relative">
        <SearchBrand brand={brand} setBrand={setBrand} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchBar;
