import { useState } from 'react';
import Link from 'next/link';
import Button from '../../components/Button';

export default function MarketMakersRecap() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What typically happens when market makers are heavily short calls?',
      options: [
        'They buy stock aggressively on dips',
        'They sell stock aggressively on rallies',
        'They remain delta neutral',
        'They buy more calls'
      ],
      correct: 0,
      explanation: 'When short calls, market makers must buy stock as it rises to maintain delta neutrality, often amplifying upward moves.'
    },
    {
      id: 2,
      question: 'Large put buying in NVDA is occurring. How do market makers likely respond?',
      options: [
        'Buy stock to remain delta neutral',
        'Sell stock to remain delta neutral',
        'No action needed',
        'Buy more puts'
      ],
      correct: 1,
      explanation: 'When selling puts to customers, market makers must sell stock to hedge their long delta exposure from the short puts.'
    },
    {
      id: 3,
      question: 'What creates "pin risk" for market makers near expiration?',
      options: [
        'Low open interest',
        'High trading volume',
        'Large open interest near current price',
        'Wide bid-ask spreads'
      ],
      correct: 2,
      explanation: 'Large open interest near the current price creates uncertainty about exercise decisions, making delta hedging difficult.'
    },
    {
      id: 4,
      question: 'AAPL has heavy call open interest at $175. Price is $174.80. What might happen?',
      options: [
        'Price likely to be pinned at $175',
        'Price likely to move far from $175',
        'No effect on price',
        'Market makers will buy puts'
      ],
      correct: 0,
      explanation: 'Large open interest can create "magnetic" effect as market makers hedge, often pinning price near strike at expiration.'
    },
    {
      id: 5,
      question: 'Which scenario creates the most gamma exposure for market makers?',
      options: [
        'Far OTM options near expiration',
        'ATM options near expiration',
        'Far OTM LEAPS',
        'Deep ITM LEAPS'
      ],
      correct: 1,
      explanation: 'ATM options near expiration have the highest gamma, requiring the most active hedging by market makers.'
    },
    {
      id: 6,
      question: 'Heavy put selling occurs in META. How might this affect stock price?',
      options: [
        'Creates upward pressure',
        'Creates downward pressure',
        'No effect on price',
        'Increases volatility'
      ],
      correct: 0,
      explanation: 'When customers sell puts, market makers buy stock to hedge, creating potential upward price pressure.'
    },
    {
      id: 7,
      question: 'What typically causes the most aggressive hedging by market makers?',
      options: [
        'Far OTM option activity',
        'ATM option activity near expiration',
        'Deep ITM option activity',
        'Calendar spread trading'
      ],
      correct: 1,
      explanation: 'ATM options near expiration have highest gamma, requiring most frequent hedging adjustments as price moves.'
    },
    {
      id: 8,
      question: 'SPY has large call wall at $400. Price is $398. Best trading strategy?',
      options: [
        'Buy puts expecting rejection',
        'Buy calls expecting magnet effect',
        'Sell straddle expecting pin',
        'Buy straddle expecting breakout'
      ],
      correct: 2,
      explanation: 'Large open interest often creates pinning effect at expiration as market makers hedge, making short straddles profitable.'
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
      <h2>Market Makers Recap</h2>
      <p>Test your knowledge of market maker behavior and its effects on trading. Select the best answer for each question.</p>
      
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
                href="/topics/market-makers"
                variant="secondary"
              >
                Review Market Makers
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