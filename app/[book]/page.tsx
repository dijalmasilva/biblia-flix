import {BookType} from "@/models/book";
import {getBookByAbbrev} from "@/helpers/bible-helper/bible-helper";
import PresentationBook from "@/components/presentation-book/presentation-book";
import ResumeChapter from "@/components/resume-chapter/resume-chapter";

let book: BookType | null = null

const BookPage = ({params}: { params: { book: string } }) => {

    const book = getBookByAbbrev(params.book)

    if (!book) {
        return (
            <div>
                <h1>Livro não encontrado</h1>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-5">
            <PresentationBook image={`/assets/covers/${book.abbrev}.png`} slug={book.name} title={book.name}/>
            <div className="flex flex-col gap-8 px-2">
                {
                    book.chapters?.map((chapter, index) => {
                        return <ResumeChapter key={index.toString()} book={params.book} chapter={index + 1} verses={chapter?.length || 1}
                                              description={chapter ? chapter[0] : ''} />
                    })
                }
            </div>
        </div>
    )
}

export default BookPage;
