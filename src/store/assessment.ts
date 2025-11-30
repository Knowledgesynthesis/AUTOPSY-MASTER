import { create } from 'zustand'

interface AssessmentAnswer {
  questionId: string
  selectedAnswer: string
  isCorrect: boolean
}

interface AssessmentStore {
  currentAnswers: AssessmentAnswer[]
  addAnswer: (answer: AssessmentAnswer) => void
  clearAnswers: () => void
  getScore: () => { correct: number; total: number }
}

export const useAssessmentStore = create<AssessmentStore>((set, get) => ({
  currentAnswers: [],
  addAnswer: (answer) =>
    set((state) => ({
      currentAnswers: [...state.currentAnswers.filter(a => a.questionId !== answer.questionId), answer],
    })),
  clearAnswers: () => set({ currentAnswers: [] }),
  getScore: () => {
    const answers = get().currentAnswers
    return {
      correct: answers.filter(a => a.isCorrect).length,
      total: answers.length,
    }
  },
}))
