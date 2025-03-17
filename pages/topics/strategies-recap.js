import { useState } from 'react';
import Link from 'next/link';
import Button from '../../components/Button';

export default function StrategiesRecap() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is a covered call strategy?",
      options: [
        "Buying a call option and 100 shares of stock",
        "Owning 100 shares of stock and selling a call option against it",
        "Buying both a call and a put option",
        "Selling both a call and a put option"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "What is a bull call spread?",
      options: [
        "Buying a lower strike call and selling a higher strike call",
        "Buying two calls at different strikes",
        "Selling a put and buying a call",
        "Buying a call and selling a put"
      ],
      correct: 0
    },
    {
      id: 3,
      question: "What characterizes an iron condor strategy?",
      options: [
        "Maximum profit when stock moves significantly",
        "Maximum profit when stock stays within a range",
        "Unlimited profit potential",
        "No initial premium received"
      ],
      correct: 1
    },
    {
      id: 4,
      question: "What is a straddle?",
      options: [
        "Buying a call and put at different strikes",
        "Buying a call and put at the same strike",
        "Selling a call and put at different strikes",
        "Buying two calls at different strikes"
      ],
      correct: 1
    },
    {
      id: 5,
      question: "Which strategy profits from a decrease in volatility?",
      options: [
        "Long straddle",
        "Long strangle",
        "Short iron condor",
        "Short straddle"
      ],
      correct: 3
    }
  ];

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers({
      ...answers,
      [questionId]: answerIndex
    });
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) correct++;
    });
    return correct;
  };

  return (
    <div>
      <h2>Options Strategies Recap</h2>
      <p>Test your knowledge of options trading strategies. Select the best answer for each question.</p>
      
      <div style={{ marginTop: '2rem' }}>
        {questions.map((q) => (
          <div key={q.id} style={{ marginBottom: '2rem' }}>
            <p style={{ fontWeight: 'bold' }}>{q.question}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {q.options.map((option, index) => (
                <label
                  key={index}
                  style={{
                    display: 'block',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    backgroundColor: showResults
                      ? index === q.correct
                        ? '#d4edda'
                        : answers[q.id] === index
                        ? '#f8d7da'
                        : 'white'
                      : answers[q.id] === index
                      ? '#e9ecef'
                      : 'white'
                  }}
                >
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={index}
                    checked={answers[q.id] === index}
                    onChange={() => handleAnswer(q.id, index)}
                    disabled={showResults}
                  />{' '}
                  {option}
                </label>
              ))}
            </div>
            {showResults && answers[q.id] !== undefined && (
              <p style={{
                marginTop: '0.5rem',
                color: answers[q.id] === q.correct ? 'green' : 'red'
              }}>
                {answers[q.id] === q.correct
                  ? '✓ Correct!'
                  : `✗ Incorrect. The correct answer is: ${q.options[q.correct]}`}
              </p>
            )}
          </div>
        ))}

        {!showResults && (
          <Button
            onClick={() => setShowResults(true)}
            variant="secondary"
          >
            Check Answers
          </Button>
        )}

        {showResults && (
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h3>Your Score: {calculateScore()} out of {questions.length}</h3>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
              <Button
                href="/topics/strategies"
                variant="secondary"
              >
                Review Strategies
              </Button>
              <Button
                onClick={() => {
                  setAnswers({});
                  setShowResults(false);
                }}
              >
                Try Again
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 