import {getBookByAbbrev} from "@/helpers/bible-helper/bible-helper";
import BackButton from "@/components/back-button/back-button";
import LazyImage from "@/components/lazy-image/lazy-image";
import ScrollAutomate from "@/components/scroll-automate/scroll-automate";

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

    <div id="chapter" className="h-screen-without-menu-bar relative">
      <LazyImage book={params.book} chapter={params.chapter} objectFit="cover"
                 className="z-[-1]"/>
      <div className="absolute inset-0 bg-black bg-opacity-[0.5] z-[-1]"/>
      <div className="h-screen-without-menu-bar">
        <ScrollAutomate bookAbbrev={params.book} chapterNumber={params.chapter}>
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
            <BackButton/>
          </div>
        </ScrollAutomate>
      </div>
    </div>
  )
}

export default ChapterPage;
