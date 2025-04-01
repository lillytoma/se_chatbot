import fs from "fs";
import unzipper from "unzipper";
import { XMLParser } from "fast-xml-parser";
import path from "path";
import { fileURLToPath } from "url";

// Enable __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, "P1.pptx");
const outputPath = path.join(__dirname, "slidesData.json");

async function extractTextFromPPTX(pptxPath) {
  const slidesText = [];
  const parser = new XMLParser();

  const directory = await unzipper.Open.file(pptxPath);

  const slideFiles = directory.files.filter(
    file =>
      file.path.startsWith("ppt/slides/slide") && file.path.endsWith(".xml")
  );

  for (const slideFile of slideFiles) {
    const content = await slideFile.buffer();
    const parsed = parser.parse(content.toString());

    const texts = [];

    try {
      const shapes = parsed["p:sld"]["p:cSld"]["p:spTree"]["p:sp"];
      const shapeArray = Array.isArray(shapes) ? shapes : [shapes];

      shapeArray.forEach(shape => {
        try {
          const paragraphs = shape["p:txBody"]["a:p"];
          const paraArray = Array.isArray(paragraphs)
            ? paragraphs
            : [paragraphs];

          paraArray.forEach(para => {
            const runs = para["a:r"];
            if (runs) {
              const runArray = Array.isArray(runs) ? runs : [runs];
              runArray.forEach(run => {
                const text = run["a:t"];
                if (text) texts.push(text);
              });
            }
          });
        } catch (err) {
          // Skip shapes without text
        }
      });

      slidesText.push(texts.join(" "));
    } catch (err) {
      console.warn("Unable to parse slide:", slideFile.path);
    }
  }

  return slidesText;
}

extractTextFromPPTX(inputPath)
  .then(slidesText => {
    const formattedSlides = slidesText.map(text => ({ text }));
    fs.writeFileSync(outputPath, JSON.stringify(formattedSlides, null, 2));
    console.log("Text extracted and saved to slidesData.json");
  })
  .catch(err => {
    console.error("Error extracting text:", err);
  });
