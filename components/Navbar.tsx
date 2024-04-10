import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="bg-transparent absolute w-full">
      <nav className="flex justify-between items-center px-8 sm:px-16 py-3 max-w-[1440px] mx-auto">
        <Link href="/">
          <Image src="/logo.svg" alt="car hub logo" width={118} height={28} />
        </Link>

        <Button title="Sign In" variant="bg-white text-blue-600 px-7 z-30" />
      </nav>
    </header>
  );
};

export default Navbar;
