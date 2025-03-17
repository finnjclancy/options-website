import { useState } from 'react';
import Link from 'next/link';
import Button from '../../components/Button';

export default function ExpirationsRecap() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What happens to theta decay as an option approaches expiration?',
      options: [
        'Decreases linearly',
        'Accelerates for ATM options',
        'Remains constant',
        'Only affects ITM options'
      ],
      correct: 1,
      explanation: 'Theta decay accelerates as expiration approaches, especially for at-the-money options, as time value erodes more quickly.'
    },
    {
      id: 2,
      question: 'TSLA is at $250. Which option has highest gamma risk near expiration?',
      options: [
        '$200 strike',
        '$250 strike',
        '$300 strike',
        'All equal gamma'
      ],
      correct: 1,
      explanation: 'At-the-money options ($250 strike) have the highest gamma, especially near expiration, making them most sensitive to price changes.'
    },
    {
      id: 3,
      question: 'When do weekly options typically expire?',
      options: [
        'Monday at market close',
        'Wednesday at market close',
        'Friday at market close',
        'Saturday at midnight'
      ],
      correct: 2,
      explanation: 'Weekly options typically expire at market close (4:00 PM ET) on Friday, though some indices have different expiration times.'
    },
    {
      id: 4,
      question: 'What is "triple witching"?',
      options: [
        'When three stocks expire simultaneously',
        'When three different option strikes expire',
        'Expiration of stock options, index options, and futures',
        'When three market makers compete for orders'
      ],
      correct: 2,
      explanation: 'Triple witching occurs when stock options, index options, and futures contracts all expire on the same day, typically the third Friday of March, June, September, and December.'
    },
    {
      id: 5,
      question: 'META is trading at $299.50 with 1 day to expiration. $300 calls are:',
      options: [
        'Likely to expire worthless',
        'Highly sensitive to price movement',
        'Safe from theta decay',
        'Guaranteed to be exercised'
      ],
      correct: 1,
      explanation: 'Options very close to the strike price with 1 day to expiration are extremely sensitive to price movements due to high gamma.'
    },
    {
      id: 6,
      question: 'What typically happens to implied volatility near expiration?',
      options: [
        'Increases for all strikes',
        'Decreases for all strikes',
        'Increases for OTM options only',
        'Forms a volatility smile'
      ],
      correct: 1,
      explanation: 'Implied volatility typically decreases as expiration approaches since there\'s less time for significant price movement.'
    },
    {
      id: 7,
      question: 'AAPL $175 put expires tomorrow. Stock at $174.90. Best action?',
      options: [
        'Exercise immediately',
        'Wait until expiration',
        'Roll to next expiration',
        'Let expire worthless'
      ],
      correct: 1,
      explanation: 'With the stock so close to strike, waiting until expiration allows maximum opportunity for profitable movement while retaining full time value.'
    },
    {
      id: 8,
      question: 'Which expiration typically has the highest option volume?',
      options: [
        'Weekly options',
        'Monthly options',
        'LEAPS',
        'Quarterly options'
      ],
      correct: 1,
      explanation: 'Monthly options (third Friday expiration) typically have the highest volume due to institutional trading and historical market convention.'
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
      <h2>Expirations Recap</h2>
      <p>Test your knowledge of option expirations and their effects on trading. Select the best answer for each question.</p>
      
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
                href="/topics/expirations"
                variant="secondary"
              >
                Review Expirations
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