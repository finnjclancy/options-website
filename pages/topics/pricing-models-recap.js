import { useState } from 'react';
import Link from 'next/link';
import Button from '../../components/Button';

export default function PricingModelsRecap() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What are the two main components of an option's price?",
      options: [
        "Strike price and expiration date",
        "Intrinsic value and time value",
        "Delta and gamma",
        "Bid and ask prices"
      ],
      correct: 1,
      explanation: "An option's price consists of intrinsic value (in-the-money amount) and time value (extrinsic value)."
    },
    {
      id: 2,
      question: "Which factor does NOT directly affect option pricing?",
      options: [
        "Underlying stock price",
        "Time to expiration",
        "Trading volume of the option",
        "Implied volatility"
      ],
      correct: 2,
      explanation: "While trading volume affects liquidity, it's not a direct input to option pricing models."
    },
    {
      id: 3,
      question: "What happens to an option's time value as expiration approaches?",
      options: [
        "It increases linearly",
        "It decreases, with acceleration near expiration",
        "It remains constant",
        "It increases exponentially"
      ],
      correct: 1,
      explanation: "Time value decreases as expiration approaches, with the rate of decay (theta) accelerating in the final weeks."
    },
    {
      id: 4,
      question: "How does implied volatility affect option prices?",
      options: [
        "Higher IV leads to lower option prices",
        "Higher IV leads to higher option prices",
        "IV only affects put options",
        "IV has no effect on option prices"
      ],
      correct: 1,
      explanation: "Higher implied volatility increases option prices for both calls and puts, as it represents greater expected price movement."
    },
    {
      id: 5,
      question: "Which pricing model is most commonly used for European-style options?",
      options: [
        "Binomial model",
        "Black-Scholes model",
        "Monte Carlo simulation",
        "Cox-Ross-Rubinstein model"
      ],
      correct: 1,
      explanation: "The Black-Scholes model is the most widely used for European-style options that can only be exercised at expiration."
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
      <h2>Options Pricing Models Recap</h2>
      <p>Test your knowledge of options pricing concepts. Select the best answer for each question.</p>
      
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
                padding: '0.5rem',
                backgroundColor: '#e9ecef',
                borderRadius: '4px'
              }}>
                {answers[q.id] === q.correct
                  ? '✓ Correct! '
                  : `✗ Incorrect. The correct answer is: ${q.options[q.correct]}. `}
                {q.explanation}
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
                href="/topics/pricing-models"
                variant="secondary"
              >
                Review Pricing Models
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