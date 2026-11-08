// Builds public/og-image.png, the preview image shown when the site is shared on social
// media or in messages. Run `npm run og` after changing the logo.
import sharp from "sharp";
import { readFile } from "node:fs/promises";

const W = 1200;
const H = 630;
const logo = await sharp(await readFile("public/logo-light.svg"), { density: 400 })
  .resize({ width: 760 })
  .png()
  .toBuffer();

const background = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#757b6c"/>
      <stop offset="1" stop-color="#575c4f"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
</svg>`);

await sharp(background)
  .composite([{ input: logo, gravity: "center" }])
  .png()
  .toFile("public/og-image.png");

console.log("Wrote public/og-image.png");
