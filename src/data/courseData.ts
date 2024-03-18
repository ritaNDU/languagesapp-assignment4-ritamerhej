import {Course} from './courseData.types';

const courseData: Course[] = [
  {
    id: (Math.random() * 1000).toString(),
    title: 'French for Beginners',
    description:
      'This course will provide you with everything you need to master the basics of the French language. Bonne chance!',

    imageUrl: require('../assets/illustrations/frenchCourse.png'),
    isComplete: false,
    lessons: [
      {
        id: (Math.random() * 1000).toString(),
        title: 'Lesson 1 - Introduction to French',
        objectif: 'Have a clear idea about the french language.',
        explanation:
          "Welcome to the first lesson of our French language course! In this lesson, we'll lay the groundwork for your journey into the beautiful language of French. Today, we'll cover basic greetings, introductions, and essential pronunciation rules to help you get started.",
        exercise: {
          question: 'What are you learning in this course?',
          option1: {answer: 'Spanish', isCorrect: false},
          option2: {answer: 'French', isCorrect: true},
        },
        isComplete: false,
      },
      {
        id: (Math.random() * 1000).toString(),
        title: 'Lesson 2 - Basic Grammar and Vocabulary',
        objectif: 'Understand basic grammar and  vocabulary words.',
        explanation:
          "Welcome back to our French language course! In this lesson, we'll expand your vocabulary and delve into some basic grammar concepts to help you construct simple sentences.",
        exercise: {
          question: 'What did we learn in this lesson?',
          option1: {answer: 'Grammar and Vocab.', isCorrect: true},
          option2: {answer: 'The Theory of Relativity', isCorrect: false},
        },
        isComplete: false,
      },
    ],
  },
  {
    id: (Math.random() * 1000).toString(),
    title: 'Italian for Beginners',
    description:
      'This course will provide you with everything you need to master the basics of the Italian language.',

    imageUrl: require('../assets/illustrations/italianCourse.png'),
    isComplete: false,
    lessons: [
      {
        id: (Math.random() * 1000).toString(),
        title: 'Lesson 1 - Italian Alphabet',
        objectif:
          'Recognize and pronouciate all the letters of the italian alphabet correctly.',
        explanation: `Alphabet: A, B, C, D, E, F, G, H, I, L, M, N, O, P, Q, R, S, T, U, V, Z
Pronunciation: Each letter has a consistent sound. For example, "A" is pronounced "ah," "B" is pronounced "beh," and so on.`,
        exercise: {
          question: 'What did we learn in this lesson?',
          option1: {answer: 'The Italian Alphabet', isCorrect: true},
          option2: {answer: 'The Persian Alphabet', isCorrect: false},
        },
        isComplete: false,
      },
      {
        id: (Math.random() * 1000).toString(),
        title: 'Lesson 2 - Basic Italian Vocabulary',
        objectif: 'Understand basic grammar and  vocabulary words.',
        explanation: `Greetings: "Ciao" (Hello/Goodbye), "Buongiorno" (Good morning), "Buonasera" (Good evening), "Arrivederci" (Goodbye)
Introductions: "Mi chiamo..." (My name is...), "Piacere" (Nice to meet you), "Come stai?" (How are you?), "Molto bene, grazie" (Very well, thank you)`,
        exercise: {
          question: 'What does the word Ciao mean?',
          option1: {answer: 'How are you?', isCorrect: false},
          option2: {answer: 'Hello/Goodbye', isCorrect: true},
        },
        isComplete: false,
      },
      {
        id: (Math.random() * 1000).toString(),
        title: 'Lesson 3 - Nouns and Articles',
        objectif: 'Understand nouns and articles.',
        explanation: `Nouns: Learn about Italian nouns and their gender (masculine or feminine) and number (singular or plural).
Masculine Nouns: "il libro" (the book), "il ragazzo" (the boy), "il computer" (the computer)
Feminine Nouns: "la casa" (the house), "la ragazza" (the girl), "la macchina" (the car)
`,
        exercise: {
          question: 'Is the noun "la casa" Feminine or Masculine?',
          option1: {answer: 'Feminine', isCorrect: true},
          option2: {answer: 'Masculine', isCorrect: false},
        },
        isComplete: false,
      },
    ],
  },
];

export default courseData;
