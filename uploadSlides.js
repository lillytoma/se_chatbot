// uploadSlides.js (place in root directory)
import { db } from "./src/firebase/firebase-config.js";
import { collection, addDoc } from "firebase/firestore";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Enable __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load slidesData.json
const slidesPath = path.join(__dirname, "slidesData.json");
const slides = JSON.parse(fs.readFileSync(slidesPath, "utf-8"));

const uploadSlides = async () => {
  const slidesCollection = collection(db, "slides");

  for (const slide of slides) {
    if (slide.text) {
      await addDoc(slidesCollection, slide);
      console.log("✅ Uploaded slide:", slide.text.slice(0, 60) + "...");
    }
  }

  console.log("All slides uploaded to Firestore!");
};

uploadSlides().catch((err) => {
  console.error("Upload failed:", err);
});
