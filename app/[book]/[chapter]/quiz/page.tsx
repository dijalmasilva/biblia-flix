import BackButton from "@/components/back-button/back-button";
import LazyImage from "@/components/lazy-image/lazy-image";
import {getQuiz} from "@/quizzes/quizzes";
import SlideQuiz from "@/components/slide-quiz/slide-quiz";

const QuizPage = ({params}: {
  params: { book: string, chapter: number }
}) => {

  const quiz = getQuiz(params.book, params.chapter);

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
}

export default QuizPage;
