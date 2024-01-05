'use client'

import {QuizType} from "@/quizzes/quizzes";
import actorQuizMachine from "@/machines/quiz-machine/quiz-machine";
import {useEffect, useState} from "react";
import {toPng} from "html-to-image";
import {USER_TAG} from "@/components/validate-user/validate-user";
import ShareButton from "@/components/share-button/share-button";

const SlideQuiz = ({quiz}: { quiz: QuizType }) => {
  let christianName: string;
  try {
    christianName = localStorage.getItem(USER_TAG) || 'Irmão'
  } catch (e) {
    christianName = 'Irmão'
  }
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
  const [state, setState] = useState<'question' | 'result'>('question')
  const [blob, setBlob] = useState<Blob | null>(null)

  useEffect(() => {
    if (state === 'result') {
      if (localStorage) {
        const quizzesDone = localStorage.getItem('quizzes');
        if (!quizzesDone) {
          localStorage.setItem('quizzes', JSON.stringify([]));
        }

        const quizzes = JSON.parse(quizzesDone || '[]');
        if (!quizzes.includes(quiz.title)) {
          quizzes.push(quiz.title);
          localStorage.setItem('quizzes', JSON.stringify(quizzes));
        }
      }

      setTimeout(async () => {
        await createImageBlobOfResult()
      }, 500)
    }
  }, [state]);

  const createImageBlobOfResult = async () => {
    if (document) {
      const element = document.getElementById('result')
      if (element) {
        toPng(element, {quality: 0.95}).then(
          async (dataUrl, ) => {
            const blob = await fetch(dataUrl).then(r => r.blob())
            setBlob(blob)
          }
        );
      }
    }
  }

  actorQuizMachine.subscribe((state) => {
    const {context} = state
    setState(state.value as 'question' | 'result')

    if (state.matches('question')) {
      setCurrentQuestionNumber(context.currentQuestion)
    }
  })
  const currentQuestion = quiz.questions[currentQuestionNumber];

  const onAnswer = (answer: string) => {
    actorQuizMachine.send({type: 'ANSWER', answer: answer})
  }

  const snapshot = actorQuizMachine.getSnapshot();

  const countCorrectAnswers = () => {
    let correctAnswers = 0
    quiz.questions.forEach((question, index) => {
      if (question.answer === snapshot.context.answers[index]) {
        correctAnswers++
      }
    })
    return correctAnswers
  }

  const isCorrect = (answer: string, index: number) => {
    return answer === snapshot.context.answers[index]
  }

  useEffect(() => {
    actorQuizMachine.send({type: 'START', totalQuestions: quiz.questions.length})
  }, [quiz]);


  return (
    <div>
      {state === 'question' && (
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">{currentQuestion.question}</h1>
          <div key={currentQuestion.id} className="flex flex-col gap-4 w-full">
            {
              currentQuestion.options.map((option, index) => {
                return (
                  <div key={index.toString()}>
                    <button className="w-full px-2 py-4 bg-red-500" onClick={() => onAnswer(option)}>{option}</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      )}
      {state === 'result' && (
        <>
          <div className="flex flex-col gap-2">
            <div id="result" className="text-center">
              <h1 className="font-bold text-xl">
                {christianName}, você acertou {countCorrectAnswers()} de {quiz.questions.length} questões!</h1>
            </div>
            <div className="flex flex-col gap-2">
              {
                quiz.questions.map((question, index) => {
                  return (
                    <div key={index.toString()}
                         className={`flex flex-col px-2 py-4 rounded w-full gap-2 ${isCorrect(question.answer, index) ? 'bg-green-600' : 'bg-red-500'}`}>
                      <h2 className="font-bold text-xl">{question.question}</h2>
                      <hr/>
                      {!isCorrect(question.answer, index) &&
                        <p className="text-md font-light"><b>Sua resposta</b>: {snapshot.context.answers[index]}</p>}
                      <p className="text-md font-light"><b>Resposta correta</b>: {question.answer}</p>
                      <p className="text-md font-light"><b>Referência</b>: {question.reference}</p>
                      {
                        question.note &&
                        <p className="text-md font-light"><b>Obs</b>: {question.note}</p>
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>
          <br/>
          {
            blob && (
              <div className="flex flex-col gap-2">
                <ShareButton
                  blob={blob}
                  url="https://biblia-flix.vercel.app"
                  title={`Resultado do Quiz - ${quiz.title}`}
                  text={`Acertei ${countCorrectAnswers()} de ${quiz.questions.length} questões! E você?`}
                  dialogTitle={`Resultado do Quiz - ${quiz.title}`}
                  className="p-2 rounded-xl bg-red-500 w-full">
                    Compartilhe seu resultado com seus amigos!
                </ShareButton>
              </div>
            )
          }
        </>
      )}
    </div>
  )
}

export default SlideQuiz
