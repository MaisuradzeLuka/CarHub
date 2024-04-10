"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

interface IShowMore {
  pageNumber: number;
  isNextPage: boolean;
}

const ShowMore = ({ pageNumber, isNextPage }: IShowMore) => {
  const router = useRouter();

  const handleShowMore = () => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set("limit", `${(pageNumber + 1) * 10}`);

    const newPathName = `${window.location.pathname}?${searchParams}`;

    router.push(newPathName, { scroll: false });
  };

  console.log(isNextPage);

  return (
    <>
      {!isNextPage && (
        <Button
          title="Show More"
          variant="bg-blue-600 text-white block mx-auto mt-6"
          onClick={handleShowMore}
        />
      )}
    </>
  );
};

export default ShowMore;
