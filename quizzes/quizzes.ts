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

const randomOptionsFromQuiz = (quiz: QuizType): QuizType => {
  quiz.questions.forEach(question => {
    question.options = toRandomOptions(question.options)
  })
  return quiz
}

const emptyQuiz: QuizType = {title: '', questions: [], requiredRead: []}

export const getQuiz = async (bookAbbrev: string, reference: number): Promise<QuizType> => {
  if (bookAbbrev !== 'gn') return Promise.resolve(emptyQuiz)

  try {
    const url = `https://raw.githubusercontent.com/dijalmasilva/biblia-flix/main/public/quizzes/${bookAbbrev}/${reference}.json`
    return fetch(url, { cache: 'default' })
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