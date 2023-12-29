import gn3 from './gn/3'

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
}

const quizzes: Record<string, Record<number, QuizType>> = {
    gn: {
        3: gn3
    }
}

export const getQuiz = (bookAbbrev: string, reference: number): QuizType => {
    return quizzes[bookAbbrev][reference] || { title: '', questions: [] }
}

export const hasQuiz = (bookAbbrev: string, reference: number): boolean => {
    return !!quizzes[bookAbbrev][reference]
}