import Image from "next/image";

const SearchButton = ({ variant }: { variant?: string }) => {
  return (
    <button
      type="submit"
      className={`absolute right-0 top-0 cursor-pointer ${variant}`}
    >
      <Image
        src="/magnifying-glass.svg"
        alt="search button"
        width={44}
        height={44}
      />
    </button>
  );
};

export default SearchButton;
