'use client'

import LazyImage from "@/components/lazy-image/lazy-image";
import SafeArea from "@/components/safe-area/safe-area";
import BackButton from "@/components/back-button/back-button";
import SlideQuiz from "@/components/slide-quiz/slide-quiz";
import {useSearchParams} from "next/navigation";
import {getQuiz} from "@/quizzes/quizzes";

const QuizView = async () => {
  const searchParams = useSearchParams()
  const book = searchParams.get('book')
  const chapter = searchParams.get('chapter')

  if (!book || !chapter) {
    return (
      <div>
        <h1>Quiz não encontrado!</h1>
      </div>
    )
  }

  const chapterAsNumber = Number(chapter)
  const quiz = await getQuiz(book, chapterAsNumber)

  if (!quiz.title) {
    return (
      <div>
        <h1>Quiz não encontrado!</h1>
      </div>
    )
  }

  return (
    <div className="h-screen-without-menu-bar relative">
      <LazyImage book={book} chapter={chapterAsNumber} objectFit="cover"
                 className="z-[-1]"/>
      <div className="absolute inset-0 bg-black bg-opacity-[0.5] z-[-1]"/>
      <div className="h-screen-without-menu-bar">
        <div className="flex flex-col overflow-y-auto h-screen-without-menu-bar w-full px-4">
          <SafeArea>
            <div className="flex w-full justify-items-start">
              <BackButton/>
            </div>
            <div className="text-center py-4">
              <h1 className="font-bold text-2xl">{quiz.title}</h1>
            </div>
            <div className="flex flex-col gap-2">
              <SlideQuiz quiz={quiz}/>
            </div>
            <div className="w-full flex justify-center items-center">
              <BackButton/>
            </div>
          </SafeArea>
        </div>
      </div>
    </div>
  )
}

export default QuizView
