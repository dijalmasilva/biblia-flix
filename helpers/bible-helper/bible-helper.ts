// @ts-ignore
import aa from 'public/bibles/aa.json'
// @ts-ignore
import acf from 'public/bibles/acf.json'
// @ts-ignore
import nvi from 'public/bibles/nvi.json'
import {BookType} from "@/models/book";

export type BibleVersion = 'aa' | 'acf' | 'nvi'
type BookAbbrevReturn = BookType | undefined

export const getBookByAbbrev = (abbrev: string, version: BibleVersion = 'nvi'): BookAbbrevReturn => {
    let bible: BookType[] = nvi
    if (version !== 'nvi') {
        bible = version === 'aa' ? aa : acf
    }

    return bible.find(book => book.abbrev === abbrev)
}