import {assign, createActor, setup} from "xstate";

const quizMachine = setup({
  actions: {
    addAnswer: assign(({context, event}) => {
      return {
        currentQuestion: context.currentQuestion + 1,
        answers: [...context.answers, event.answer],
      }
    })
  }
}).createMachine({
  id: 'quizMachine',
  initial: 'question',
  context: {
    currentQuestion: 0,
    answers: [],
    totalQuestions: 0,
  },
  output: ({context}) => {
    return {
      answers: context.answers,
    }
  },
  states: {
    question: {
      on: {
        ANSWER: [
          {
            guard: ({context}: { context: any }) => {
              const next = context.currentQuestion + 1
              return next < context.totalQuestions
            },
            actions: 'addAnswer',
          },
          {
            guard: ({context}: { context: any }) => {
              const next = context.currentQuestion + 1
              return next >= context.totalQuestions
            },
            actions: 'addAnswer',
            target: 'result',
          }
        ]
      }
    },
    result: {}
  },
  on: {
    START: {
      guard: ({context}: { context: any }) => {
        return context.totalQuestions === 0 || context.currentQuestion >= context.totalQuestions
      },
      actions: assign(({context, event}) => {
        return {
          totalQuestions: event.totalQuestions,
          currentQuestion: 0,
          answers: [],
        }
      }),
      target: '.question',
    }
  }
})

const actorQuizMachine = createActor(quizMachine).start()

export default actorQuizMachine
