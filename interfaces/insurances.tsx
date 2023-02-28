import { StaticImageData } from "next/image";

export interface PRODUCT {
  name: string;
  icon: string | StaticImageData;
  type: string;
  slogan: string;
  benefit: any[];
  link: string;
  logo?: StaticImageData | undefined;
}
export interface BENEFIT {
  icon?: string;
  content?: string;
}
