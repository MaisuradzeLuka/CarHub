export interface ICar {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface ISearchParams {
  make?: string;
  model?: string;
  year?: number;
  fuel_type?: string;
  limit?: number;
}
