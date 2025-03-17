import { useState } from 'react';
import Link from 'next/link';
import Button from '../../components/Button';

export default function BlackScholesRecap() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What are the key inputs needed for the Black-Scholes model?",
      options: [
        "Stock price, strike price, and expiration only",
        "Stock price, strike price, time to expiration, volatility, and risk-free rate",
        "Stock price and volatility only",
        "Strike price and time to expiration only"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "Which assumption is NOT made by the Black-Scholes model?",
      options: [
        "The stock price follows a lognormal distribution",
        "There are no transaction costs",
        "Volatility changes over time",
        "The risk-free rate is constant"
      ],
      correct: 2
    },
    {
      id: 3,
      question: "What type of options can the basic Black-Scholes model price?",
      options: [
        "American options only",
        "European options only",
        "Both American and European options",
        "Neither American nor European options"
      ],
      correct: 1
    },
    {
      id: 4,
      question: "How does implied volatility relate to the Black-Scholes model?",
      options: [
        "It's an input to the model",
        "It's the volatility that makes the model price match the market price",
        "It's always equal to historical volatility",
        "It's not related to the Black-Scholes model"
      ],
      correct: 1
    },
    {
      id: 5,
      question: "What happens to call option prices in the model when volatility increases?",
      options: [
        "They always decrease",
        "They stay the same",
        "They always increase",
        "They may increase or decrease depending on delta"
      ],
      correct: 2
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
      <h2>Black-Scholes Model Recap</h2>
      <p>Test your knowledge of the Black-Scholes option pricing model. Select the best answer for each question.</p>
      
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
                href="/topics/black-scholes"
                variant="secondary"
              >
                Review Black-Scholes Model
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