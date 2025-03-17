import { useState } from 'react';
import Link from 'next/link';
import Button from '../../components/Button';

export default function BuyingSellingCallsPutsRecap() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'NVDA is at $850. You buy a $900 call for $20. What\'s your maximum loss?',
      options: [
        '$850 (stock price)',
        '$900 (strike price)',
        '$2,000 (premium paid)',
        'Unlimited'
      ],
      correct: 2,
      explanation: 'When buying options, your maximum loss is limited to the premium paid. Here, $20 × 100 shares = $2,000.'
    },
    {
      id: 2,
      question: 'You sell a META $400 put for $5 when META is at $450. What\'s your maximum gain?',
      options: [
        '$500 (premium received)',
        '$400 (strike price)',
        '$450 (stock price)',
        'Unlimited'
      ],
      correct: 0,
      explanation: 'When selling options, your maximum gain is the premium received. Here, $5 × 100 shares = $500.'
    },
    {
      id: 3,
      question: 'AAPL is at $170. Which strategy profits from a small rise in the stock?',
      options: [
        'Buy $180 Call',
        'Sell $160 Put',
        'Buy $160 Put',
        'Sell $180 Call'
      ],
      correct: 1,
      explanation: 'Selling an OTM put profits from the stock staying above the strike. A small rise helps ensure this outcome.'
    },
    {
      id: 4,
      question: 'SPY drops 2% in a day. Which position likely gained value?',
      options: [
        'Long $450 Call',
        'Short $440 Put',
        'Long $440 Put',
        'Short $450 Call'
      ],
      correct: 2,
      explanation: 'Long puts profit from price declines. As SPY falls, the put gains intrinsic value and/or becomes closer to being in-the-money.'
    },
    {
      id: 5,
      question: 'TSLA is highly volatile. Which strategy has the WORST risk/reward?',
      options: [
        'Buy 1 TSLA $300 Call',
        'Sell 1 TSLA $300 Call',
        'Buy 1 TSLA $250 Put',
        'Buy 100 shares of TSLA'
      ],
      correct: 1,
      explanation: 'Selling naked calls on a volatile stock is very risky - unlimited loss potential with limited gain (premium received).'
    },
    {
      id: 6,
      question: 'AMD is at $160. You sell a $150 put. What happens if AMD drops to $140?',
      options: [
        'You lose the premium paid',
        'You must buy 100 shares at $150',
        'You can sell 100 shares at $150',
        'The option expires worthless'
      ],
      correct: 1,
      explanation: 'When short a put and the stock falls below strike, you\'re obligated to buy shares at strike price ($150), even though worth less ($140).'
    },
    {
      id: 7,
      question: 'Which strategy has the highest probability of profit but smallest potential gain?',
      options: [
        'Buy ATM call',
        'Buy OTM put',
        'Sell deep OTM put',
        'Buy deep ITM call'
      ],
      correct: 2,
      explanation: 'Selling deep OTM puts has high probability of profit (stock unlikely to fall that far) but gain limited to small premium received.'
    },
    {
      id: 8,
      question: 'You\'re bullish on AMZN but worried about a market crash. Best strategy?',
      options: [
        'Buy AMZN shares',
        'Buy AMZN calls',
        'Buy call spread (long lower strike, short higher strike)',
        'Sell AMZN puts'
      ],
      correct: 2,
      explanation: 'A call spread reduces cost and defines risk while still providing upside exposure if AMZN rises.'
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
      <h2>Buying & Selling Options Recap</h2>
      <p>Test your knowledge of buying and selling options. Select the best answer for each question.</p>
      
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
                href="/topics/buying-selling-calls-puts"
                variant="secondary"
              >
                Review Buying & Selling
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