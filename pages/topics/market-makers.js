import Link from 'next/link';

export default function MarketMakers() {
  return (
    <div>
      <h1>Market Makers & Order Flow</h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          Market makers are the invisible force behind options prices. Understanding how they operate
          and react to order flow can give you a significant edge in trading.
        </p>
        
        <h3>Key Concepts</h3>
        <ul>
          <li>How market makers manage risk</li>
          <li>Impact of large option trades</li>
          <li>Using flow data in trading</li>
        </ul>
      </div>

      <h2>Part 1: Market Maker Basics</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'auto 1fr 1fr',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
          <div><strong>Position</strong></div>
          <div><strong>Hedge Required</strong></div>
          <div><strong>Market Impact</strong></div>
          
          <div>Short 1000 Calls</div>
          <div>Buy ~50,000 shares</div>
          <div>Upward pressure</div>
          
          <div>Short 1000 Puts</div>
          <div>Sell ~50,000 shares</div>
          <div>Downward pressure</div>
          
          <div>Delta Neutral</div>
          <div>Balance long/short</div>
          <div>Price stability</div>
        </div>
        
        <p><strong>Real Example: Apple (AAPL) Options Expiration</strong></p>
        <ul>
          <li>Market makers are short 50,000 contracts of AAPL $175 calls</li>
          <li>Delta = 0.5, meaning they need to hedge with 2.5M shares</li>
          <li>As AAPL approaches $175, they must buy more shares</li>
          <li>This creates a "pinning" effect at the $175 strike</li>
        </ul>
      </div>

      <h2>Part 2: Advanced Market Maker Concepts</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 2fr',
          gap: '1rem'
        }}>
          <div><strong>Pattern</strong></div>
          <div><strong>Trading Approach</strong></div>
          
          <div>Options Pinning</div>
          <div>Trade toward high OI strikes near expiration</div>
          
          <div>Gamma Squeeze</div>
          <div>Buy momentum in high-call-volume stocks</div>
          
          <div>Vol Crush</div>
          <div>Sell premium before known events</div>
          
          <div>Strike Magnets</div>
          <div>Use major strikes as price targets</div>
        </div>
      </div>

      <h2>Real-World Case Studies</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h3>Case Study 1: GME Gamma Squeeze (2021)</h3>
        <ul>
          <li>Massive call buying forced market maker hedging</li>
          <li>Created feedback loop pushing price higher</li>
          <li>Stock rose from $20 to $480 in days</li>
          <li>Lesson: Market maker hedging can amplify moves</li>
        </ul>
        
        <h3>Case Study 2: AAPL Pinning (Regular Occurrence)</h3>
        <ul>
          <li>High open interest at round strikes ($150, $160, etc.)</li>
          <li>Stock often "pins" to these levels on expiration</li>
          <li>Traders can sell premium around these strikes</li>
          <li>Lesson: Use options data to predict price targets</li>
        </ul>
      </div>

      <h2>Trading Strategy Guide</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p><strong>When to Trade Market Maker Flows:</strong></p>
        <ul>
          <li>High open interest at specific strikes</li>
          <li>Large options positions being opened</li>
          <li>Expiration week dynamics</li>
          <li>Volatility extremes</li>
        </ul>
        
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Quick Strategy Guide:</strong></p>
          <ul>
            <li>High call OI? → Look for upside moves</li>
            <li>High put OI? → Expect resistance</li>
            <li>Balanced OI? → Range-bound likely</li>
            <li>Expiration near? → Watch for pinning</li>
          </ul>
        </div>
      </div>

      <div style={{ 
        marginTop: '3rem',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h2>Ready to Test Your Knowledge?</h2>
        <Link href="/topics/market-makers-recap" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          transition: 'background-color 0.2s'
        }}>
          Take the Market Makers Quiz →
        </Link>
      </div>
    </div>
  );
}
