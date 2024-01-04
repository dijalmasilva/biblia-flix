'use client'

import PresentationBook from "@/components/presentation-book/presentation-book";
import {useEffect, useState} from "react";
import {getBookByAbbrev} from "@/helpers/bible-helper/bible-helper";

const LastRead = () => {

  const [abbrevBook, setAbbrevBook] = useState<string>('gn')
  const [chapter, setChapter] = useState<number>(1)

  const book = getBookByAbbrev(abbrevBook)

  useEffect(() => {
    if (localStorage) {
      const lastReadStorage = localStorage.getItem('last-read')
      if (lastReadStorage) {
        const [book, chapter] = lastReadStorage.split('-')
        setAbbrevBook(book)
        setChapter(parseInt(chapter))
      }
    }
  }, []);

  return (
    <PresentationBook hasBack={false} slug={abbrevBook}
                      title={`${book?.name} - Capítulo  ${chapter}`}/>
  )
}

export default LastRead
