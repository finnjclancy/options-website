import { useState } from 'react';
import Link from 'next/link';
import Button from '../../components/Button';

export default function IntroductionRecap() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'A stock is trading at $100. Which option gives you the right to buy at $95?',
      options: [
        '$95 Put',
        '$95 Call',
        '$105 Call',
        '$105 Put'
      ],
      correct: 1,
      explanation: 'A call option gives you the right (but not obligation) to buy stock at the strike price. A $95 call lets you buy at $95.'
    },
    {
      id: 2,
      question: 'AAPL is at $175. Which position has unlimited risk?',
      options: [
        'Long 1 AAPL $180 Call',
        'Short 1 AAPL $180 Call',
        'Long 1 AAPL $170 Put',
        'Long 100 shares of AAPL'
      ],
      correct: 1,
      explanation: 'Short calls have unlimited risk because there\'s no cap on how high a stock price can go.'
    },
    {
      id: 3,
      question: 'What happens if you don\'t exercise an in-the-money option by expiration?',
      options: [
        'The option is automatically exercised if it\'s $0.01 or more in-the-money',
        'The option expires worthless',
        'The expiration is extended by one week',
        'You must pay a penalty fee'
      ],
      correct: 0,
      explanation: 'Most brokers automatically exercise options that are at least $0.01 in-the-money at expiration to protect holder value.'
    },
    {
      id: 4,
      question: 'TSLA is trading at $250. Which option has the highest probability of profit?',
      options: [
        'Buy $300 Call for $2',
        'Sell $200 Put for $1',
        'Buy $200 Put for $1',
        'Buy $250 Call for $10'
      ],
      correct: 1,
      explanation: 'Selling an out-of-the-money put has a high probability of profit as the stock needs to fall significantly to lose money.'
    },
    {
      id: 5,
      question: 'Which factor does NOT affect option premium?',
      options: [
        'Time to expiration',
        'Stock price',
        'Trading volume of the stock',
        'Interest rates'
      ],
      correct: 2,
      explanation: 'While trading volume affects liquidity and spreads, it\'s not a direct input to option pricing. The main factors are stock price, strike, time, volatility, and rates.'
    },
    {
      id: 6,
      question: 'META announces earnings in 2 days. What typically happens to option prices?',
      options: [
        'All options become cheaper',
        'Near-term options become more expensive due to higher implied volatility',
        'Only put options increase in price',
        'Option prices stay the same'
      ],
      correct: 1,
      explanation: 'Implied volatility typically increases before earnings announcements, making options more expensive, especially in the nearest expiration.'
    },
    {
      id: 7,
      question: 'Which strategy has defined risk (cannot lose more than initial investment)?',
      options: [
        'Short 1 call option',
        'Short 100 shares of stock',
        'Long 1 put option',
        'Short 1 put option'
      ],
      correct: 2,
      explanation: 'Buying options (calls or puts) has defined risk limited to the premium paid, while selling options or stock short has undefined risk.'
    },
    {
      id: 8,
      question: 'You buy a $50 call for $2 when the stock is at $48. What\'s your breakeven price?',
      options: [
        '$48',
        '$50',
        '$52',
        '$46'
      ],
      correct: 2,
      explanation: 'Breakeven = Strike Price + Premium Paid. Here, $50 + $2 = $52. The stock must rise above $52 for profit.'
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
      <h2>Options Introduction Recap</h2>
      <p>Test your knowledge of basic options concepts. Select the best answer for each question.</p>
      
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
                href="/topics/introduction"
                variant="secondary"
              >
                Review Introduction
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