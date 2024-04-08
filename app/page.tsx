import CarCard from "@/components/CarCard";
import CustomInput from "@/components/CustomInput";
import Hero from "@/components/Hero";
import { ICar } from "@/types";
import { fetchCars } from "@/utils";

const Home = async () => {
  const cars: ICar[] | null = await fetchCars();

  return (
    <main className="flex flex-col items-center overflow-x-hidden w-full">
      <Hero />

      <section className="relative w-full 2xl:w-[1440px] mx-auto mt-20 px-8 sm:px-16">
        <div>
          <h2 className="text-4xl font-semibold text-gray-800">
            Car Catalogue
          </h2>
          <p className="text-gray-600 mt-3">Explore out cars you might like</p>
        </div>

        <div className="flex flex-col xl:flex-row xl:justify-between mt-12 mb-20 xl:mt-0">
          <CustomInput />
          <div>
            <button>Filter</button>
            <button>Filter</button>
          </div>
        </div>
      </section>

      {cars?.length ? (
        <section className="w-full px-8 sm:px-16 2xl:w-[1440px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
          {cars?.map((car, i) => (
            <CarCard key={i} car={car} />
          ))}
        </section>
      ) : (
        <div>
          <h2 className="text-4xl font-semibold">Oops no cars to display</h2>
        </div>
      )}

      <div className="w-full h-[1px] bg-gray-300 my-20" />
    </main>
  );
};

export default Home;
