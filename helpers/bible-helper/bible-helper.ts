// @ts-ignore
import aa from 'public/bibles/aa.json'
// @ts-ignore
import acf from 'public/bibles/acf.json'
// @ts-ignore
import nvi from 'public/bibles/nvi.json'
import {BookType} from "@/models/book";

export type BibleVersion = 'aa' | 'acf' | 'nvi'
type BookAbbrevReturn = BookType | undefined

export const getBible = (version: BibleVersion = 'nvi'): BookType[] => {
  switch (version) {
    case 'aa':
      return aa
    case 'acf':
      return acf
    default:
      return nvi
  }
}

export const getBookByAbbrev = (abbrev: string, version: BibleVersion = 'nvi'): BookAbbrevReturn => {
  const bible = getBible(version)
  return bible.find(book => book.abbrev === abbrev)
}

export const getBooksByName = (bookName: string, limit = 5, version: BibleVersion = 'nvi'): BookType[] => {
  const bible = getBible(version)

  let bibleFiltered = bible.filter(book => book.name.toLowerCase().includes(bookName.toLowerCase())) || []
  if (limit > 0 && bibleFiltered.length > limit) {
    bibleFiltered = bibleFiltered.filter((book, index) => index + 1 <= limit)
  }
  return bibleFiltered
}

export const hasNextChapter = (abbrev: string, chapter: number, version: BibleVersion = 'nvi'): boolean => {
  const book = getBookByAbbrev(abbrev, version)
  if (book && book.chapters) {
    const nextChapter = parseInt(String(chapter)) + 1
    return book.chapters.length >= nextChapter
  }

  return false;
}