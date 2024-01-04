import gn3 from './gn/3'
import {toRandomOptions} from "@/helpers/array-helper/array-helper";

export type QuestionType = {
    id: number,
    question: string,
    answer: string,
    options: string[],
    reference: string,
    note?: string,
    difficulty: 'easy' | 'medium' | 'hard'
}

export type QuizType = {
    title: string,
    questions: QuestionType[]
    requiredRead: string[],
}

const quizzes: Record<string, Record<number, QuizType>> = {
    gn: {
        3: gn3,
    }
}

const randomOptionsFromQuiz = (quiz: QuizType): QuizType => {
  quiz.questions.forEach(question => {
    question.options = toRandomOptions(question.options)
  })
  return quiz
}

const emptyQuiz: QuizType = { title: '', questions: [], requiredRead: []}

export const getQuiz = async (bookAbbrev: string, reference: number): Promise<QuizType> => {
    if (bookAbbrev !== 'gn') return Promise.resolve(emptyQuiz)

    try {
        const url = `http://localhost:3000/quizzes/${bookAbbrev}/${reference}.json`
        return fetch(url)
          .then(res => res.json())
          .then((data: QuizType) => {
            return randomOptionsFromQuiz(data)
          })
          .catch((e) => {
              return emptyQuiz
          })
    } catch (e) {
        return emptyQuiz
    }
}