import type { ImageMetadata } from "astro";

export type ProjectProps = {
  title: string;
  text: string;
  subtext: string;
  link: string;
  background: ImageMetadata;
};
