/**
 * Renders cv/cv.html to public/Jovany_Raafat_Wahba_CV.pdf.
 *
 *   npm run cv
 *
 * Uses the locally installed Chrome via puppeteer-core rather than downloading
 * a browser. Override the binary with CHROME_PATH if yours lives elsewhere.
 */
import puppeteer from "puppeteer-core";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { existsSync } from "node:fs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const CANDIDATES = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const executablePath = CANDIDATES.find((p) => existsSync(p));
if (!executablePath) {
  console.error(
    "Could not find Chrome. Set CHROME_PATH to your Chrome/Chromium binary."
  );
  process.exit(1);
}

const input = path.join(here, "cv.html");
const output = path.join(root, "public", "Jovany_Raafat_Wahba_CV.pdf");

const browser = await puppeteer.launch({ executablePath, headless: "new" });
const page = await browser.newPage();
await page.goto(pathToFileURL(input).href, { waitUntil: "networkidle0" });
await page.pdf({
  path: output,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
});
await browser.close();

console.log(`CV written to ${path.relative(root, output)}`);
