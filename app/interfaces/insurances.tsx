import { StaticImageData } from "next/image";

export interface PRODUCT {
  name: string;
  icon: string | StaticImageData;
  type: string;
  slogan: string;
  benefit: any[];
}
