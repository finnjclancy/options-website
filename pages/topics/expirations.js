import Link from 'next/link';

export default function Expirations() {
  return (
    <div>
      <h1>Option Expirations: Mechanics and Strategy</h1>
      
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
          <div><strong>Scenario</strong></div>
          <div><strong>What Happens</strong></div>
          <div><strong>Action Required</strong></div>
          
          <div>ITM by $0.01+</div>
          <div>Auto-exercise</div>
          <div>Close if unwanted</div>
          
          <div>ATM ($0.01 range)</div>
          <div>Pin risk</div>
          <div>Explicit instructions</div>
          
          <div>Deep ITM</div>
          <div>Early exercise possible</div>
          <div>Monitor assignments</div>
        </div>
        
        <p><strong>Real Example: TSLA Assignment Risk</strong></p>
        <ul>
          <li>You're short 10 TSLA $250 calls</li>
          <li>TSLA trading at $255 near expiration</li>
          <li>Risk: You might be assigned and forced to sell 1,000 shares</li>
          <li>Solution: Close position before expiration if you don't want assignment</li>
        </ul>
      </div>

      <h2>Part 2: Advanced Expiration Dynamics</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h3>Strategy 2.1: Price Pinning</h3>
        <div style={{ marginBottom: '1rem' }}>
          <p><strong>Example: META Pinning at $300</strong></p>
          <ul>
            <li>Large open interest at $300 strike (100,000 contracts)</li>
            <li>Market makers delta-hedge as price approaches $300</li>
            <li>Creates "gravitational pull" toward $300</li>
            <li>Price often stays near $300 into expiration</li>
          </ul>
          <p><strong>Trading Opportunity:</strong> Sell premium around pin strikes</p>
        </div>
        
        <h3>Strategy 2.2: Early Exercise Decisions</h3>
        <div>
          <p><strong>Example: NVDA Dividend Capture</strong></p>
          <ul>
            <li>NVDA trading at $400, paying $0.50 dividend tomorrow</li>
            <li>You hold deep ITM $350 calls</li>
            <li>Time value is only $0.20</li>
            <li>Smart move: Exercise early to capture $0.50 dividend</li>
          </ul>
        </div>
      </div>

      <h2>Part 3: Expiration Trading Strategies</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p><strong>Key Rules for Expiration Week:</strong></p>
        <ul>
          <li>Close positions early to avoid liquidity issues</li>
          <li>Monitor ITM options for assignment risk</li>
          <li>Use limit orders in last hour of trading</li>
          <li>Check for corporate actions/dividends</li>
        </ul>
        
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Quick Decision Guide:</strong></p>
          <ul>
            <li>ITM by {'>'} $0.50? → Close or prepare for exercise</li>
            <li>Near large OI strike? → Watch for pinning</li>
            <li>Last hour of trading? → Use limit orders only</li>
            <li>Dividend coming? → Check for early exercise</li>
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
        <Link href="/topics/expirations-recap" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          transition: 'background-color 0.2s'
        }}>
          Take the Expirations Quiz →
        </Link>
      </div>
    </div>
  );
}
