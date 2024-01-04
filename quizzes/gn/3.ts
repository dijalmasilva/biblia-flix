// Perguntas sobre Gênesis do capitulo 1 ao 3

import {QuizType} from "@/quizzes/quizzes";
import {toRandomOptions} from "@/helpers/array-helper/array-helper";

const quiz: QuizType = {
  title: 'Quiz - Gênesis 1 ao 3',
  requiredRead: ['gn-1', 'gn-2', 'gn-3'],
  questions: [
    {
      id: 1,
      question: "Em quantos dias Deus criou o mundo?",
      options: toRandomOptions([
        "6 dias",
        "7 dias",
        "8 dias",
        "9 dias"
      ]),
      answer: "6 dias",
      reference: "Gênesis 1:31",
      note: "Deus criou o mundo em 6 dias e descansou no sétimo dia.",
      difficulty: "easy",
    },
    {
      id: 2,
      question: "O que foi criado no primeiro dia da criação?",
      options: toRandomOptions([
        "Dia e noite",
        "Céu e terra",
        "Terra e mar",
        "Mar e céu"
      ]),
      answer: "Dia e noite",
      reference: "Gênesis 1:3-5",
      note: "",
      difficulty: "easy",
    },
    {
      id: 3,
      question: "O homem foi criado à imagem e semelhança de quem?",
      options: toRandomOptions([
        "Deus",
        "Jesus",
        "Anjos",
        "Satanás"
      ]),
      answer: "Deus",
      reference: "Gênesis 1:26",
      note: "",
      difficulty: "easy",
    },
    {
      id: 4,
      question: "Qual foi o primeiro casal?",
      options: toRandomOptions([
        "Adão e Eva",
        "Caim e Abel",
        "Adão e Caim",
        "Adão e Abel"
      ]),
      answer: "Adão e Eva",
      reference: "Gênesis 2:22",
      note: "",
      difficulty: "easy",
    },
    {
      id: 5,
      question: "O que Deus fez no sétimo dia?",
      options: toRandomOptions([
        "Descansou",
        "Criou o homem",
        "Criou o mundo",
        "Criou os animais"
      ]),
      answer: "Descansou",
      reference: "Gênesis 2:2",
      note: "",
      difficulty: "easy",
    },
    {
      id: 6,
      question: "Quando Deus criou o homem do barro precisou dar vida à ele, o que Deus fez?",
      options: toRandomOptions([
        "Soprou em suas narinas",
        "Deu um beijo",
        "Deu um tapa",
        "Deu um abraço"
      ]),
      answer: "Soprou em suas narinas",
      reference: "Gênesis 2:7",
      note: "",
      difficulty: "easy",
    },
    {
      id: 7,
      question: "O que Deus disse que não era bom?",
      options: toRandomOptions([
        "O homem viver sozinho",
        "O homem viver com os animais",
        "O homem viver com a mulher",
        "O homem viver com Deus"
      ]),
      answer: "O homem viver sozinho",
      reference: "Gênesis 2:18",
      note: "",
      difficulty: "medium",
    },
    {
      id: 8,
      question: "O que Deus fez para o homem não ficar sozinho?",
      options: toRandomOptions([
        "Criou uma mulher",
        "Criou um animal",
        "Criou um anjo",
        "Criou uma planta"
      ]),
      answer: "Criou uma mulher",
      reference: "Gênesis 2:22",
      note: "",
      difficulty: "easy",
    },
    {
      id: 9,
      question: "O que Deus disse que o homem e a mulher deveriam fazer?",
      options: toRandomOptions([
        "Serem fecundos e multiplicarem",
        "Serem amigos",
        "Serem felizes",
        "Serem obedientes"
      ]),
      answer: "Serem fecundos e multiplicarem",
      reference: "Gênesis 1:28",
      note: "",
      difficulty: "easy",
    },
    {
      id: 10,
      question: "O que Deus disse que o homem não deveria comer?",
      options: toRandomOptions([
        "Da árvore do conhecimento do bem e do mal",
        "Da árvore da vida",
        "Da árvore do conhecimento do mal",
        "Da árvore do conhecimento do bem"
      ]),
      answer: "Da árvore do conhecimento do bem e do mal",
      reference: "Gênesis 2:17",
      note: "",
      difficulty: "easy",
    },
    {
      id: 11,
      question: "O que Deus disse que aconteceria se o homem comesse da árvore do conhecimento do bem e do mal?",
      options: toRandomOptions([
        "Certamente morreria",
        "Viveria para sempre",
        "Seria feliz",
        "Seria triste"
      ]),
      answer: "Certamente morreria",
      reference: "Gênesis 2:17",
      note: "",
      difficulty: "easy",
    },
    {
      id: 12,
      question: "Quem tentou Eva?",
      options: toRandomOptions([
        "A serpente",
        "O diabo",
        "O anjo",
        "O homem"
      ]),
      answer: "A serpente",
      reference: "Gênesis 3:1",
      note: "",
      difficulty: "easy",
    },
    {
      id: 13,
      question: "O que a serpente disse para Eva?",
      options: toRandomOptions([
        "Que ela não morreria",
        "Que ela morreria",
        "Que ela seria feliz",
        "Que ela seria triste"
      ]),
      answer: "Que ela não morreria",
      reference: "Gênesis 3:4",
      note: "",
      difficulty: "easy",
    },
    {
      id: 14,
      question: "O que Eva fez depois de ouvir a serpente?",
      options: toRandomOptions([
        "Comeu do fruto proibido",
        "Comeu do fruto permitido",
        "Não comeu do fruto proibido",
        "Não comeu do fruto permitido"
      ]),
      answer: "Comeu do fruto proibido",
      reference: "Gênesis 3:6",
      note: "",
      difficulty: "easy",
    },
    {
      id: 15,
      question: "Porque Adão e Eva se esconderam de Deus?",
      options: toRandomOptions([
        "Porque estavam nus",
        "Porque estavam com medo",
        "Porque estavam tristes",
        "Porque estavam com vergonha"
      ]),
      answer: "Porque estavam nus",
      reference: "Gênesis 3:10",
      note: "",
      difficulty: "easy",
    },
    {
      id: 16,
      question: "O que Adão e Eva fizeram para se cobrir?",
      options: toRandomOptions([
        "Folhas de figueira",
        "Folhas de bananeira",
        "Folhas de coqueiro",
        "Folhas de palmeira"
      ]),
      answer: "Folhas de figueira",
      reference: "Gênesis 3:7",
      note: "",
      difficulty: "medium",
    },
    {
      id: 17,
      question: "O que Adão respondeu a Deus quando ele perguntou se ele havia comido do fruto proibido?",
      options: toRandomOptions([
        "A mulher que me deste por companheira me deu do fruto, e eu comi",
        "A serpente me enganou, e eu comi",
        "O diabo me enganou, e eu comi",
        "O anjo me enganou, e eu comi"
      ]),
      answer: "A mulher que me deste por companheira me deu do fruto, e eu comi",
      reference: "Gênesis 3:12",
      note: "",
      difficulty: "medium",
    },
    {
      id: 18,
      question: "Qual foi a maldição que Deus deu para a serpente?",
      options: toRandomOptions([
        "Rastejar sobre o ventre e comer pó todos os dias da sua vida",
        "Rastejar sobre o ventre e comer frutos todos os dias da sua vida",
        "Rastejar sobre o ventre e comer folhas todos os dias da sua vida",
        "Rastejar sobre o ventre e comer animais todos os dias da sua vida"
      ]),
      answer: "Rastejar sobre o ventre e comer pó todos os dias da sua vida",
      reference: "Gênesis 3:14",
      note: "",
      difficulty: "medium",
    },
    {
      id: 19,
      question: "Qual foi a maldição dada ao homem e a sua mulher?",
      options: toRandomOptions([
        "Suor do rosto para comer e dor para ter filhos",
        "Suor do rosto para comer e dor para trabalhar",
        "Suor do rosto para comer e dor para viver",
        "Suor do rosto para comer e dor para morrer",
      ]),
      answer: "Suor do rosto para comer e dor para ter filhos",
      reference: "Gênesis 3:16-19",
      note: "",
      difficulty: "medium",
    },
    {
      id: 20,
      question: "O que Deus colocou no Jardim do Éden após expulsar o homem e a mulher?",
      options: toRandomOptions([
        "Querubins e a espada flamejante",
        "Serafins e a espada de fogo",
        "Serafins e a espada de luz",
        "Querubins e a espada de ouro"
      ]),
      answer: "Querubins e a espada flamejante",
      reference: "Gênesis 3:24",
      note: "",
      difficulty: "medium",
    }
  ]
}

export default quiz;