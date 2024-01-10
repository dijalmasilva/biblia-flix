import {getBible, getBookByAbbrev} from "@/helpers/bible-helper/bible-helper";
import BackButton from "@/components/back-button/back-button";
import LazyImage from "@/components/lazy-image/lazy-image";
import ScrollAutomate from "@/components/scroll-automate/scroll-automate";
import NextChapterButton from "@/components/next-chapter-button/next-chapter-button";
import SafeArea from "@/components/safe-area/safe-area";
import ShareChapterImage from "@/components/share-chapter-image/share-chapter-image";
import OpacityMode from "@/components/opacity-mode/opacity-mode";

export async function generateStaticParams() {
  const bible = getBible();
  const params: { book: string, chapter: string }[] = []

  bible.forEach(book => {
    if (book.chapters) {
      book.chapters.forEach((chapter, index) => {
        params.push({book: book.abbrev, chapter: `${index + 1}`})
      })
    }
  })

  return params;
}
const ChapterPage = ({params}: {
  params: { book: string, chapter: number }
}) => {

  const book = getBookByAbbrev(params.book)
  const chapterNumber = params.chapter;
  const allChapters = book?.chapters;

  if (!book || !allChapters) {
    return (
      <div>
        <h1>Livro não encontrado</h1>
      </div>
    )
  }

  const chapter = allChapters[chapterNumber - 1];

  if (!chapter) {
    return (
      <div>
        <h1>Capítulo não encontrado</h1>
      </div>
    )
  }

  return (
    <div id="chapter" className="relative" style={{ maxHeight: '-webkit-fill-available' }}>
      <LazyImage book={params.book} chapter={params.chapter} objectFit="cover"
                 className="z-[-1]" fallback="/assets/books/bg-cross.png" />
      <OpacityMode />
      <ScrollAutomate bookAbbrev={params.book} chapterNumber={params.chapter}>
        <SafeArea>
          <div className="flex w-full justify-items-start">
            <BackButton/>
          </div>
          <div className="text-center py-4">
            <h1 className="font-bold text-2xl">{`${book.name}, Capítulo ${params.chapter}`}</h1>
          </div>
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
          <div className="w-full flex justify-center items-center">
            <BackButton size="medium"/>
            <NextChapterButton abbrev={params.book} chapter={params.chapter}/>
          </div>
          <div className="w-full flex justify-center items-center mb-2">
            <ShareChapterImage book={book} chapter={params.chapter}>
              Compartilhe a imagem desse capítulo
            </ShareChapterImage>
          </div>
        </SafeArea>
      </ScrollAutomate>
    </div>
  )
}

export default ChapterPage;
