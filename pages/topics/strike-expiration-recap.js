import { useState } from 'react';
import Button from '../../components/Button';

export default function StrikeExpirationRecap() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is a strike price?",
      options: [
        "The current market price of the stock",
        "The predetermined price at which an option can be exercised",
        "The price you paid for the option",
        "The price at which the stock opened"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "When is a call option considered 'in-the-money' (ITM)?",
      options: [
        "When the strike price is above the stock price",
        "When the strike price equals the stock price",
        "When the strike price is below the stock price",
        "When the option is profitable"
      ],
      correct: 2
    },
    {
      id: 3,
      question: "What happens to an unexercised option at expiration?",
      options: [
        "It automatically converts to stock",
        "It expires worthless",
        "It gets extended for another month",
        "It gets refunded"
      ],
      correct: 1
    },
    {
      id: 4,
      question: "Which type of options can be exercised at any time before expiration?",
      options: [
        "European options",
        "American options",
        "Asian options",
        "LEAPS options"
      ],
      correct: 1
    },
    {
      id: 5,
      question: "When do monthly options typically expire?",
      options: [
        "The last day of each month",
        "The first Friday of each month",
        "The third Friday of each month",
        "The 15th of each month"
      ],
      correct: 2
    },
    {
      id: 6,
      question: "What is 'pin risk' in options trading?",
      options: [
        "The risk of losing your trading PIN",
        "When a stock tends to gravitate toward strike prices at expiration",
        "The risk of early assignment",
        "The risk of the option being delisted"
      ],
      correct: 1
    },
    {
      id: 7,
      question: "Which options typically have the most liquidity?",
      options: [
        "Weekly options",
        "Monthly options",
        "Quarterly options",
        "LEAPS"
      ],
      correct: 1
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
      <h2>Strike Price & Expiration Recap</h2>
      <p>Test your knowledge of strike prices and expiration concepts. Select the best answer for each question.</p>
      
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
                href="/topics/strike-expiration"
                variant="secondary"
              >
                Review Strike Price & Expiration
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