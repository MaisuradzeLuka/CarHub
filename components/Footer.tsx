import { footerList } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-14">
      <div className="relative flex flex-col justify-between gap-20 md:flex-row w-full px-16">
        <div>
          <Image
            src="/logo.svg"
            alt="footer car hub logo"
            width={132}
            height={24}
          />
          <p className="mt-5 text-gray-700 text-md">
            Carhub 2023 <br /> All Rights Reserved ©
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          {footerList.map((list) => (
            <div key={list.title}>
              <h4 className="font-medium text-xl">{list.title}</h4>
              <ul>
                {list.links.map((listItem) => (
                  <li
                    key={listItem.title}
                    className="my-5 text-gray-500 text-lg"
                  >
                    <Link href={listItem.url}>{listItem.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 -bottom-4 h-[1px] bg-gray-300" />
      </div>

      <div className="flex flex-col gap-7 xs:flex-row xs:gap-0 justify-between items-center px-16 pb-9 text-center">
        <p className="text-gray-700 text-md h-full">
          @2024 CarHub. All rights reserved
        </p>

        <div className="flex flex-col xs:flex-row items-center gap-1 sm:gap-7 text-gray-500 text-lg">
          <Link href="/">Privacy & Policy</Link>
          <Link href="/">Terms & Condition</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
