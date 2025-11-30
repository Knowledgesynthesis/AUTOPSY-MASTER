import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { assessmentQuestions } from '@/data/assessmentQuestions'
import { CheckCircle2, XCircle, RotateCcw, Target } from 'lucide-react'

interface Answer {
  questionId: string
  selectedAnswer: number
  isCorrect: boolean
}

export function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const question = assessmentQuestions[currentQuestion]
  const totalQuestions = assessmentQuestions.length

  const handleAnswerSelect = (optionIndex: number) => {
    if (showExplanation) return // Don't allow changes after submission
    setSelectedOption(optionIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return

    const isCorrect = selectedOption === question.correctAnswer
    const newAnswer: Answer = {
      questionId: question.id,
      selectedAnswer: selectedOption,
      isCorrect,
    }

    setAnswers([...answers, newAnswer])
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setShowExplanation(false)
    } else {
      setIsComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setSelectedOption(null)
    setShowExplanation(false)
    setIsComplete(false)
  }

  const score = {
    correct: answers.filter(a => a.isCorrect).length,
    total: answers.length,
    percentage: answers.length > 0 ? Math.round((answers.filter(a => a.isCorrect).length / answers.length) * 100) : 0,
  }

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-6 w-6" />
              Assessment Complete
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4 py-8">
              <div className="text-6xl font-bold text-primary">{score.percentage}%</div>
              <p className="text-xl">
                You answered <span className="font-bold">{score.correct}</span> out of{' '}
                <span className="font-bold">{score.total}</span> questions correctly
              </p>
            </div>

            <div className="space-y-2 border-t pt-6">
              <h3 className="font-semibold">Session Summary</h3>
              <p className="text-sm text-muted-foreground">
                This session-only assessment does not track your progress. Review the modules to strengthen your understanding.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Suggested Review Topics</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(
                  assessmentQuestions
                    .filter((_q, i) => !answers[i]?.isCorrect)
                    .map(q => q.category)
                )).map((category) => (
                  <Badge key={category} variant="outline">{category}</Badge>
                ))}
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button onClick={handleRestart}>
                <RotateCcw className="mr-2 h-4 w-4" />
                Take Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Question {currentQuestion + 1} of {totalQuestions}</span>
          <span>{score.correct} correct so far</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl flex-1">{question.question}</CardTitle>
            <Badge variant="outline">{question.category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedOption === index
              const isCorrect = index === question.correctAnswer
              const showCorrect = showExplanation && isCorrect
              const showIncorrect = showExplanation && isSelected && !isCorrect

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showCorrect
                      ? 'border-green-500 bg-green-500/10'
                      : showIncorrect
                      ? 'border-red-500 bg-red-500/10'
                      : isSelected
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  } ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showCorrect && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                    {showIncorrect && <XCircle className="h-5 w-5 text-red-500" />}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <h4 className="font-semibold">Explanation:</h4>
              <p className="text-sm">{question.explanation}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end space-x-2">
            {!showExplanation ? (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion}>
                {currentQuestion < totalQuestions - 1 ? 'Next Question' : 'Finish Assessment'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
