import { ICar, ISearchParams } from "@/types";

export const fetchCars = async (searchParams: ISearchParams) => {
  //prettier-ignore
  const {brand = 'mercedes', model = '', year = 2022, limit = 10, fuel_type = ''} = searchParams;

  try {
    const response = fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${brand}&model=${model}&fuel_type=${fuel_type}&year=${year}&limit=${limit}`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
          "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
      }
    );

    if (!(await response).ok) {
      throw new Error("Something went wrong");
    }

    const data = (await response).json();

    return data;
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
  }
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: ICar, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
