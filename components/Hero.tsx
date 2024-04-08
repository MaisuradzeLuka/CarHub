import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-w-[1440px] flex xl:flex-row flex-col gap-5 relative z-0">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Find, book, rent a car — quick and super easy!
        </h1>

        <p className="text-[27px] text-black-100 font-light my-5">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <Button title="Explore Cars" variant="bg-blue-600 text-white" />
      </div>

      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src="/hero.png" alt="home" fill className="object-contain" />
        </div>

        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
      </div>
    </section>
  );
};

export default Hero;
