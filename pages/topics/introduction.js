import Link from 'next/link';

export default function Introduction() {
  return (
    <div>
      <h1>Introduction to Options</h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          Options give you the right, but not the obligation, to buy or sell a stock at a specific price 
          within a set time period. They can be used for generating income, hedging risk, or speculating 
          on market movements.
        </p>
        
        <h3>In This Section</h3>
        <ul>
          <li style={{ marginBottom: '0.5rem' }}>What an option is and how it works</li>
          <li style={{ marginBottom: '0.5rem' }}>The difference between calls & puts</li>
          <li style={{ marginBottom: '0.5rem' }}>How option contracts are structured</li>
          <li style={{ marginBottom: '0.5rem' }}>Key terms: strike price, expiration, premium</li>
          <li style={{ marginBottom: '0.5rem' }}>How options make (or lose) money</li>
        </ul>
      </div>

      <h2>Contract Size and Multiplier</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p>Standard equity options have:</p>
        <ul>
          <li>Contract Size: 100 shares</li>
          <li>Multiplier: ×100 for pricing</li>
        </ul>
        <p>
          <strong>Example:</strong> If an option costs $1.50, you pay $150 per contract ($1.50 × 100)
        </p>
      </div>

      <h2>Types of Options</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h4>Call Option Example</h4>
        <p>Right to buy stock at strike price</p>
        <ul>
          <li>Buy AAPL $150 Call for $5</li>
          <li>Profit if AAPL {'>'} $155</li>
          <li>Maximum loss = $500</li>
        </ul>

        <h4>Put Option Example</h4>
        <p>Right to sell stock at strike price</p>
        <ul>
          <li>Buy AAPL $150 Put for $5</li>
          <li>Profit if AAPL {'<'} $145</li>
          <li>Maximum loss = $500</li>
        </ul>
      </div>

      <h2>Key Benefits</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h4>Leverage</h4>
        <p>Control more shares with less capital</p>
        <ul>
          <li>$5 option controls 100 shares</li>
          <li>$500 total investment</li>
          <li>Instead of $15,000 for shares</li>
        </ul>

        <h4>Limited Risk</h4>
        <p>When buying options:</p>
        <ul>
          <li>Maximum loss = premium paid</li>
          <li>Known risk up front</li>
          <li>Unlimited profit potential</li>
        </ul>

        <h4>Flexibility</h4>
        <p>Multiple ways to trade:</p>
        <ul>
          <li>Directional bets</li>
          <li>Income generation</li>
          <li>Portfolio protection</li>
        </ul>
      </div>

      <h2>Risk Considerations</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <ul>
          <li>Options expire worthless if your prediction is wrong</li>
          <li>Time decay works against buyers</li>
          <li>Leverage can amplify losses</li>
          <li>Complex strategies require active management</li>
        </ul>
      </div>

      <div style={{ 
        marginTop: '3rem',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h3>Ready to Test Your Knowledge?</h3>
        <Link href="/topics/introduction-recap" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          transition: 'background-color 0.2s'
        }}>
          Take the Introduction Quiz →
        </Link>
      </div>
    </div>
  );
}
