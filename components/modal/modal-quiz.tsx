'use client'

import Modal from "@/components/modal/modal";
import {useEffect, useState} from "react";
import {getQuiz, hasQuiz, QuizType} from "@/quizzes/quizzes";
import Link from "next/link";
import CrossAnimationIcon from "@/components/star-spark/cross-animation-icon";
import Button from "@/components/button/button";

type Props = {
  abbrev: string;
  chapter: number;
  checkQuiz?: boolean;
}

const ModalQuiz = ({ abbrev, chapter, checkQuiz }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [quizAvailable, setQuizAvailable] = useState(false);
  const [quiz, setQuiz] = useState<QuizType | null>(null);

  useEffect(() => {
    if (localStorage) {
      const key = `${abbrev}-${chapter}`;
      const chaptersRead = localStorage.getItem('read');
      let quizzesDone = localStorage.getItem('quizzes');

      if (!chaptersRead) return;

      if (!quizzesDone) {
        localStorage.setItem('quizzes', JSON.stringify([]));
        quizzesDone = '[]';
      }

      if (!hasQuiz(abbrev, chapter)) return

      const quiz = getQuiz(abbrev, chapter);
      const quizzes = JSON.parse(quizzesDone);

      if (quizzes.includes(quiz.title)) return;

      const requiredRead = quiz.requiredRead;
      const read = JSON.parse(chaptersRead) as string[];

      let readChapters = 0;
      for (const required of requiredRead) {
        if (read.includes(required)) readChapters++;
      }

      if (readChapters === requiredRead.length) {
        setQuizAvailable(true);
        setQuiz(quiz)
      }
    }
  }, [checkQuiz]);


  return (
    <>
      {!showModal && quizAvailable && (
        <div className="fixed top-20 right-5 z-30">
          <div className="flex justify-center">
            <Button
              className="w-[64px] h-[48px]"
              onClick={() => setShowModal(true)}
            >
              <CrossAnimationIcon />
            </Button>
          </div>
        </div>
      )}
      <Modal title="Você tem um quizz disponível" description={quiz ? quiz.title : ''} isOpen={showModal}>
        <div className="flex gap-4">
          <div className="flex gap-2 justify-between mt-6 mb-2 w-full">
            <Link href={`/${abbrev}/${chapter}/quiz`}
                  className="bg-red-500 px-4 py-2 rounded text-center">
              Acessar
            </Link>
            <button onClick={() => setShowModal(false)}>Fechar</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ModalQuiz;
