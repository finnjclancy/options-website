import { useState } from 'react';
import Link from 'next/link';
import Button from '../../components/Button';

export default function OptionGreeksRecap() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'AAPL is at $175. A $180 call has 0.40 delta. If AAPL rises to $176, approximately what happens?',
      options: [
        'Option loses $0.40',
        'Option gains $0.40',
        'Option value stays the same',
        'Option delta becomes 0.40'
      ],
      correct: 1,
      explanation: 'Delta represents the approximate option price change for a $1 move in the stock. With 0.40 delta, a $1 rise means ~$0.40 gain.'
    },
    {
      id: 2,
      question: 'Which position has positive gamma exposure?',
      options: [
        'Short 1 TSLA call',
        'Short 100 shares of TSLA',
        'Long 1 TSLA put',
        'Short 1 TSLA put'
      ],
      correct: 2,
      explanation: 'Long options (both calls and puts) have positive gamma, meaning their delta becomes more favorable as price moves in their direction.'
    },
    {
      id: 3,
      question: 'META earnings are tomorrow. Which greek becomes more significant?',
      options: [
        'Delta',
        'Gamma',
        'Theta',
        'Vega'
      ],
      correct: 3,
      explanation: 'Vega measures sensitivity to volatility changes. Before earnings, implied volatility changes can significantly impact option prices.'
    },
    {
      id: 4,
      question: 'SPY at-the-money options have the highest _____ exposure.',
      options: [
        'Delta',
        'Gamma',
        'Theta',
        'Rho'
      ],
      correct: 1,
      explanation: 'ATM options have the highest gamma, meaning their delta changes most rapidly as the underlying price moves.'
    },
    {
      id: 5,
      question: 'You\'re short NVDA puts. Which greek exposure hurts you most in a crash?',
      options: [
        'Negative delta as price falls',
        'Negative gamma accelerating losses',
        'Positive theta decay',
        'Positive vega as volatility spikes'
      ],
      correct: 1,
      explanation: 'Negative gamma means delta becomes more negative as price falls, accelerating losses in a crash scenario.'
    },
    {
      id: 6,
      question: 'Which strategy has the highest negative theta (time decay)?',
      options: [
        'Long deep ITM call',
        'Short OTM put',
        'Long ATM straddle',
        'Long stock'
      ],
      correct: 2,
      explanation: 'ATM options have the highest theta decay. A straddle (long call + put) combines two ATM options, doubling the negative theta.'
    },
    {
      id: 7,
      question: 'AMD moves up $5. Which position gains the most delta?',
      options: [
        'Long 1 ATM call',
        'Long 1 deep ITM call',
        'Long 1 far OTM call',
        'Long 100 shares of AMD'
      ],
      correct: 0,
      explanation: 'ATM options have the highest gamma, so their delta increases most for a given price move. Stock delta is always 1.0.'
    },
    {
      id: 8,
      question: 'You\'re delta-neutral but worried about volatility spikes. Best hedge?',
      options: [
        'Buy more stock',
        'Buy long-dated options',
        'Sell short-dated options',
        'No hedge needed if delta-neutral'
      ],
      correct: 1,
      explanation: 'Long-dated options have higher vega exposure, providing positive volatility exposure to hedge against vol spikes.'
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
      <h2>Option Greeks Recap</h2>
      <p>Test your knowledge of option greeks and their effects. Select the best answer for each question.</p>
      
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
                href="/topics/option-greeks"
                variant="secondary"
              >
                Review Option Greeks
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