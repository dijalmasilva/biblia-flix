import {getBible, getBookByAbbrev} from "@/helpers/bible-helper/bible-helper";
import PresentationBook from "@/components/presentation-book/presentation-book";
import ResumeChapter from "@/components/resume-chapter/resume-chapter";

export async function generateStaticParams() {
  const bible = getBible();
  return bible.map(book => ({book: book.abbrev}))
}

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
            <PresentationBook slug={book.abbrev} title={book.name} hideRead/>
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
