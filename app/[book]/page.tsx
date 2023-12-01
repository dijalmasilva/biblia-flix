import {BookType} from "@/models/book";
import {getBookByAbbrev} from "@/helpers/bible-helper/bible-helper";

let book: BookType | null = null

const BookPage = ({ params }: { params: { book: string } }) => {

    const book = getBookByAbbrev(params.book)

    if (!book) {
        return (
            <div>
                <h1>Book not found</h1>
            </div>
        )
    }

    return (
        <div className="p-4 flex flex-col gap-2">
            <h1>Livro: {book.name}</h1>
            <h1>Cap: {book.chapters?.length}</h1>
            <h1>Abbrev: {book.abbrev}</h1>
        </div>
    )
}

export default BookPage;
