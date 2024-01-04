import BackButton from "@/components/back-button/back-button";
import LazyImage from "@/components/lazy-image/lazy-image";
import {getQuiz} from "@/quizzes/quizzes";
import SlideQuiz from "@/components/slide-quiz/slide-quiz";
import {getBible} from "@/helpers/bible-helper/bible-helper";


export async function generateStaticParams() {
  const bible = getBible();

  const paramsPromises = bible.map(async (book) => {
    const promises = book.chapters?.map(async (chapter, index) => {
      const quiz = await getQuiz(book.abbrev, index + 1);
      if (quiz && quiz.title) return {book: book.abbrev, chapter: `${index + 1}`}
    })

    const chapters = await Promise.all(promises || []);
    return chapters.filter((chapter) => chapter)
  })

  const paramsNested = await Promise.all(paramsPromises);
  const params = paramsNested.flat();

  console.dir(params)
  return params;
}

const QuizPage = async ({params}: {
  params: { book: string, chapter: number }
}) => {

  return getQuiz(params.book, params.chapter).then((quiz) => {
    if (!quiz.title) {
      return (
        <div>
          <h1>Quiz não encontrado!</h1>
        </div>
      )
    }

    return (
      <div className="h-screen-without-menu-bar relative">
        <LazyImage book={params.book} chapter={params.chapter} objectFit="cover"
                   className="z-[-1]"/>
        <div className="absolute inset-0 bg-black bg-opacity-[0.5] z-[-1]"/>
        <div className="h-screen-without-menu-bar">
          <div className="flex flex-col overflow-y-auto h-screen-without-menu-bar w-full px-4">
            <div className="flex w-full justify-items-start">
              <BackButton/>
            </div>
            <div className="text-center py-4">
              <h1 className="font-bold text-2xl">{quiz.title}</h1>
            </div>
            <div className="flex flex-col gap-2">
              <SlideQuiz quiz={quiz} />
            </div>
            <div className="w-full flex justify-center items-center">
              <BackButton/>
            </div>
          </div>
        </div>
      </div>
    )
  }).catch(() => {
    return (
      <div>
        <h1>Quiz não encontrado!</h1>
      </div>
    )
  })
}

export default QuizPage;
