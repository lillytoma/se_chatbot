import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

export const fetchMatchingSlides = async (query) => {
  const slidesCollection = collection(db, "slides");
  const snapshot = await getDocs(slidesCollection);
  const results = [];

  const queryWords = query.toLowerCase().split(" ").filter(word => word.length > 2); // Skip tiny words

  snapshot.forEach((doc) => {
    const data = doc.data();
    const text = (data.text || "").toLowerCase();

    // Count how many query words match
    const matchedWords = queryWords.filter(word => text.includes(word));

    // Match if at least 40% of words appear in the slide
    if (matchedWords.length >= Math.ceil(queryWords.length * 0.4)) {
      results.push(data);
    }
  });

  return results;
};
