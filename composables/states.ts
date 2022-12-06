import { Phone } from "~~/server/api/phones";

export const useCurrentPhone = () =>
  useState<Phone | null>("currentPhone", () => null);
