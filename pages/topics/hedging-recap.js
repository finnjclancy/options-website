import { useState } from 'react';
import Link from 'next/link';
import Button from '../../components/Button';

export default function HedgingRecap() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'You hold 500 shares of AAPL at $180. Which hedging strategy provides complete downside protection?',
      options: [
        'Sell 5 covered calls at $185',
        'Buy 5 protective puts at $175',
        'Buy 5 calls at $185',
        'Sell 5 naked puts at $175'
      ],
      correct: 1,
      explanation: 'Protective puts provide complete downside protection below the strike price while maintaining upside potential.'
    },
    {
      id: 2,
      question: 'Your portfolio delta is +300. How many SPY puts (delta -0.4 each) should you buy to achieve delta neutrality?',
      options: [
        '750 puts',
        '300 puts',
        '400 puts',
        '1200 puts'
      ],
      correct: 0,
      explanation: 'To offset +300 delta, you need: 300 ÷ 0.4 = 750 puts (each with -0.4 delta) to achieve neutrality.'
    },
    {
      id: 3,
      question: 'Which strategy is most cost-effective for hedging a long stock position?',
      options: [
        'Buy ATM protective puts',
        'Create a zero-cost collar (sell call, buy put)',
        'Buy two ATM puts per 100 shares',
        'Sell deep ITM covered calls'
      ],
      correct: 1,
      explanation: 'A collar can provide downside protection at minimal cost by using call premium to offset put cost.'
    },
    {
      id: 4,
      question: 'Your position has positive gamma exposure. Which market condition poses the biggest risk?',
      options: [
        'High volatility',
        'Low volatility with small price movements',
        'Large price swings',
        'Rising interest rates'
      ],
      correct: 1,
      explanation: 'Positive gamma positions benefit from large moves but lose money in low volatility, small movement environments.'
    },
    {
      id: 5,
      question: 'TSLA earnings are tomorrow. Your position has high negative vega. What\'s the best hedge?',
      options: [
        'Buy more TSLA stock',
        'Buy long-dated options with positive vega',
        'Sell short-dated options',
        'Do nothing, vega risk is minimal'
      ],
      correct: 1,
      explanation: 'Long-dated options provide positive vega exposure to offset the negative vega risk before earnings.'
    },
    {
      id: 6,
      question: 'You\'re running a delta-neutral strategy that\'s losing money in both up and down markets. What\'s likely the issue?',
      options: [
        'Negative theta decay',
        'Poor delta hedging',
        'Negative gamma exposure',
        'High vega risk'
      ],
      correct: 2,
      explanation: 'Negative gamma positions lose money in both directions as they become more short delta as prices fall and more long delta as prices rise.'
    },
    {
      id: 7,
      question: 'Which hedging approach requires the most frequent adjustments?',
      options: [
        'Protective puts',
        'Covered calls',
        'Delta hedging',
        'Option collars'
      ],
      correct: 2,
      explanation: 'Delta hedging requires constant rebalancing as the underlying price moves to maintain neutral exposure.'
    },
    {
      id: 8,
      question: 'Your portfolio is long 1000 shares of META and short 10 ATM calls. What\'s your position\'s gamma exposure?',
      options: [
        'Positive gamma',
        'Negative gamma',
        'Neutral gamma',
        'Cannot be determined'
      ],
      correct: 1,
      explanation: 'Short calls have negative gamma that exceeds the zero gamma of stock, making the overall position negative gamma.'
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
      <h2>Hedging Recap</h2>
      <p>Test your knowledge of hedging strategies and risk management. Select the best answer for each question.</p>
      
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
                href="/topics/hedging"
                variant="secondary"
              >
                Review Hedging
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