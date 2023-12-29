'use client'

import {useEffect, useState} from "react";
import {getBookByAbbrev} from "@/helpers/bible-helper/bible-helper";

type Props = {
  imageWidth: number,
  isBook?: boolean,
  bookAbbreviation: string,
  chapter?: number,
}

const RedBar = ({ imageWidth, isBook = false, bookAbbreviation, chapter}: Props) => {
  const book = getBookByAbbrev(bookAbbreviation)
  const [resultWidth, setResultWidth] = useState(0)

  useEffect(() => {
    if (localStorage) {
      const readChapters = localStorage.getItem('read') || ''
      if (!readChapters) return;

      const chapters = JSON.parse(readChapters) as string[];
      const pattern = `${bookAbbreviation}-${chapter}`

      if (!isBook) {
        if (chapters.find(chapter => chapter === pattern)) {
          setResultWidth(imageWidth)
        }
      } else {
        const chaptersRead = chapters.filter(chapter => chapter.includes(bookAbbreviation))
        const chaptersReadCount = chaptersRead.length
        const chaptersCount = book?.chapters?.length || 0
        const percentage = (chaptersReadCount / chaptersCount) * 100
        const width = (imageWidth * percentage) / 100
        setResultWidth(width)
      }
    }
  }, []);

  if (resultWidth === 0) return <></>

  return (
    <div className={`bg-red-500 h-1 absolute bottom-0 left-0`} style={{width: `${resultWidth}px`}}/>
  )
}

export default RedBar