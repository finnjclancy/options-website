import { useState } from 'react';
import Link from 'next/link';
import Button from '../../components/Button';

export default function SkewVolatilityRecap() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'AAPL has 30-day HV of 20% and IV of 35%. What does this suggest?',
      options: [
        'Options are definitely underpriced',
        'Options might be overpriced',
        'Volatility will definitely increase',
        'Historical volatility is wrong'
      ],
      correct: 1,
      explanation: 'When IV > HV, it suggests options might be expensive, but other factors like upcoming events need to be considered.'
    },
    {
      id: 2,
      question: 'Which typically shows reverse skew (puts more expensive than calls)?',
      options: [
        'Commodity futures',
        'Equity indices',
        'Growth tech stocks',
        'Meme stocks'
      ],
      correct: 1,
      explanation: 'Equity indices typically show reverse skew due to institutional demand for protective puts and crash insurance.'
    },
    {
      id: 3,
      question: 'VIX spikes to 35. Best volatility trading strategy?',
      options: [
        'Buy straddles',
        'Sell iron condors',
        'Buy calendar spreads',
        'Buy naked calls'
      ],
      correct: 1,
      explanation: 'High VIX means expensive options. Selling defined-risk strategies like iron condors can profit from volatility contraction.'
    },
    {
      id: 4,
      question: 'META puts have higher IV than calls. This pattern is called:',
      options: [
        'Forward skew',
        'Reverse skew',
        'Volatility smile',
        'Volatility term structure'
      ],
      correct: 1,
      explanation: 'Reverse skew (or put skew) occurs when put options have higher implied volatility than calls at similar distances OTM.'
    },
    {
      id: 5,
      question: 'Which best indicates potential volatility mean reversion?',
      options: [
        'Current IV = HV',
        'IV rank near 100%',
        'VIX below 15',
        'Put-call ratio high'
      ],
      correct: 1,
      explanation: 'High IV rank suggests volatility is elevated relative to its history, increasing chances of mean reversion lower.'
    },
    {
      id: 6,
      question: 'TSLA earnings next week. How does this affect the volatility surface?',
      options: [
        'All expirations see equal IV increase',
        'Near-term IV increases more than far-term',
        'Far-term IV increases more than near-term',
        'IV decreases across all expirations'
      ],
      correct: 1,
      explanation: 'Event-driven volatility impacts near-term options more, creating a volatility term structure peak around the event.'
    },
    {
      id: 7,
      question: 'Which strategy profits from decreasing skew?',
      options: [
        'Long OTM put',
        'Short OTM put, long further OTM put',
        'Long ATM put',
        'Short ATM straddle'
      ],
      correct: 1,
      explanation: 'Put spreads (short closer-to-money, long further OTM) benefit when the difference in put IVs (skew) decreases.'
    },
    {
      id: 8,
      question: 'SPY puts show strong skew. Best way to trade this?',
      options: [
        'Buy put spreads',
        'Sell put spreads',
        'Buy call spreads',
        'Sell naked puts'
      ],
      correct: 1,
      explanation: 'When puts are expensive due to skew, selling put spreads can profit from both skew reduction and elevated premium.'
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
      <h2>Volatility & Skew Recap</h2>
      <p>Test your knowledge of volatility concepts and skew patterns. Select the best answer for each question.</p>
      
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
                href="/topics/skew-volatility"
                variant="secondary"
              >
                Review Volatility & Skew
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