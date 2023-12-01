// @ts-ignore
import aa from 'public/bibles/aa.json'
import type { NextApiRequest, NextApiResponse } from 'next'
import {BookType} from "@/models/book";
import {BibleVersion, getBookByAbbrev} from "@/helpers/bible-helper/bible-helper";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const query = req.query
    const abbrev = query.abbrev as string | undefined
    const version = query.version as BibleVersion | 'nvi'

    if (!abbrev) {
        res.status(400).json({ error: 'Missing `abbrev` query' })
        return
    }

    const aaBible = aa as BookType[]
    const bible = getBookByAbbrev(abbrev, version)

    if (bible) {
        res.json({ bible })
    } else {
        res.status(404)
    }
}