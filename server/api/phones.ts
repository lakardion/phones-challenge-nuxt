import phones from "assets/phones.json";

export type Phone = {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  color: string;
  price: number;
  imageFileName: string;
  screen: string;
  processor: string;
  ram: number;
};
export default defineEventHandler((e) => {
  return phones as Phone[];
});
