import { ICar } from "@/types";
import Image from "next/image";
import Button from "./Button";
import { calculateCarRent } from "@/utils";

const CarCard = ({ car }: { car: ICar }) => {
  return (
    <div className="w-full bg-primary-blue hover:bg-white hover:shadow-xl rounded-[5%] p-6 text-gray-800">
      <h2 className="text-2xl capitalize font-semibold mb-4">
        {car.make} {car.model}
      </h2>

      <div className="flex h-12">
        <span className="self-start text-xl">$</span>
        <p className="text-4xl font-medium self-center">
          {calculateCarRent(car.city_mpg, car.year)}
        </p>
        <span className="self-end">/day</span>
      </div>

      <div className="relative w-full h-60 my-6">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative my-4 group">
        <div className="flex justify-between group-hover:invisible">
          <div className="flex flex-col gap-2 items-center">
            <Image
              src="/steering-wheel.svg"
              alt="steering wheel"
              width={22}
              height={22}
            />
            <span className=" text-gray-500 text-md">
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <Image src="/tire.svg" alt="drive" width={22} height={22} />
            <span className="uppercase text-gray-500 text-md">{car.drive}</span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <Image src="/gas.svg" alt="gas tank" width={22} height={22} />
            <span className="uppercase text-gray-500 text-md">
              {car.combination_mpg} mpg
            </span>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <Button
            title="Learn more"
            variant="bg-blue-600 w-full py-4 text-white text-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
