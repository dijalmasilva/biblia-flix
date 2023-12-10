import {BookType} from "@/models/book";
import {getBookByAbbrev} from "@/helpers/bible-helper/bible-helper";
import BackButton from "@/components/back-button/back-button";
import LazyImage from "@/components/lazy-image/lazy-image";

let book: BookType | null = null

const ChapterPage = ({ params }: { params: { book: string, chapter: number } }) => {

    const book = getBookByAbbrev(params.book)
    const chapterNumber = params.chapter;
    const allChapters = book?.chapters;

    if (!book || !allChapters) {
        return (
            <div>
                <h1>Not found</h1>
            </div>
        )
    }

    const chapter = allChapters[chapterNumber - 1];

    if (!chapter) {
        return (
            <div>
                <h1>Not found</h1>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-6 p-4 justify-center items-center">
            <LazyImage book={params.book} chapter={params.chapter} objectFit="cover"
                       className="z-[-1]"/>
            <div className="absolute inset-0 bg-black bg-opacity-[0.4] z-[-1]"/>
            <div className="flex w-full justify-items-start">
                <BackButton/>
            </div>
            <h1 className="font-bold text-2xl">{`${book.name}, Capítulo ${params.chapter}`}</h1>
            <div className="flex flex-col gap-2">
                {
                    chapter.map((verse, index) => {
                        return (
                            <div key={index.toString()} className="flex gap-2">
                                <h1 className="font-bold text-gray-500 mt-[2px]">{index + 1}</h1>
                                <p className="text-lg">{verse}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="text-center">
                <BackButton/>
            </div>
        </div>
    )
}

export default ChapterPage;
