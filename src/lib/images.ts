import type { ImageMetadata } from "astro";

// Photos are found by folder, so adding one is just dropping a file into src/assets/...
// The file name becomes the alt text: "gold-stage-backdrop.jpg" reads "Gold stage backdrop".
const files = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true },
);

export type Photo = { src: ImageMetadata; alt: string; name: string };

function toPhoto(path: string, mod: { default: ImageMetadata }): Photo {
  const name = path.split("/").pop()!.replace(/\.[^.]+$/, "");
  const words = name.replace(/^\d+[-_ ]*/, "").replace(/[-_]+/g, " ").trim();
  return { src: mod.default, name, alt: words.charAt(0).toUpperCase() + words.slice(1) };
}

/** Every photo directly inside src/assets/<folder>/, sorted by file name. */
export function photosIn(folder: string): Photo[] {
  const prefix = `/src/assets/${folder}/`;
  return Object.entries(files)
    .filter(([path]) => path.startsWith(prefix) && !path.slice(prefix.length).includes("/"))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, mod]) => toPhoto(path, mod));
}

/** The photo in src/assets/<folder>/ named <name> (any extension), if there is one. */
export function photoNamed(folder: string, name: string): Photo | undefined {
  return photosIn(folder).find((p) => p.name === name);
}
