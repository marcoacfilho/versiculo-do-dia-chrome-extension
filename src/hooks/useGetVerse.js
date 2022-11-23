import { useEffect, useState } from "react";
import { getVerse } from "../services/biblia";

const useGetVerse = () => {
  const [verse, setVerse] = useState(null);
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (!verse && !book) {
      const getVerseOnLoad = async () => {
        const verseData = await getVerse();
        
        setVerse(verseData.text);
        setBook(
          `${verseData.book.name} ${verseData.chapter}:${verseData.number}`
        );
      };
    
      getVerseOnLoad();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { verse, book }
}

export default useGetVerse