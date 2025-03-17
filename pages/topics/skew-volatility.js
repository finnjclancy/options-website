import Link from 'next/link';

export default function SkewVolatility() {
  return (
    <div>
      <h1>Volatility and Skew: The Hidden Forces of Options Markets</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Volatility and skew are the invisible forces that drive options pricing. 
          Understanding them gives you a significant edge in the options market.
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h2>Key Concepts</h2>
        <ul>
          <li>How to read and interpret volatility signals</li>
          <li>Why some options are more expensive than others (skew)</li>
          <li>How to trade volatility for profit</li>
        </ul>
      </div>

      <h2>Understanding Volatility</h2>
      <p>
        Volatility measures how much a stock price fluctuates. In options trading, we care about two types:
      </p>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Historical Volatility (HV)</h3>
        <p>This is the actual measured volatility of the stock over a past period.</p>
        <ul>
          <li>Higher HV = Larger past price swings</li>
          <li>Common periods: 10-day, 30-day, 90-day</li>
          <li>Used to compare with current IV levels</li>
        </ul>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <h4>Example: HV vs IV Analysis</h4>
          <p>
            If 30-day HV is 20% but 30-day IV is 30%:
          </p>
          <ul>
            <li>Options might be overpriced (IV {'>'} HV)</li>
            <li>But upcoming earnings could justify higher IV</li>
          </ul>
        </div>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Implied Volatility (IV)</h3>
        <p>This is the market's forecast of future volatility, derived from option prices.</p>
        <ul>
          <li>High IV = Expensive options</li>
          <li>Low IV = Cheap options</li>
          <li>IV tends to mean-revert over time</li>
        </ul>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <h4>Important IV Concepts</h4>
          <ul>
            <li>Options lose value even if stock doesn't move</li>
            <li>Buying high IV options can be risky</li>
          </ul>
        </div>
      </div>

      <h2>Term Structure: Volatility Across Time</h2>
      <p>
        Term structure shows how IV varies across different expiration dates.
      </p>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Term Structure Patterns</h3>
        <ul>
          <li>Normal: Upward sloping (longer-dated = higher IV)</li>
          <li>Inverted: Short-term IV higher than long-term</li>
          <li>Flat: Similar IV across expirations</li>
        </ul>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <h4>Trading Insight</h4>
          <p>Normal term structure suggests calendar spreads might work</p>
        </div>
      </div>

      <h2>Volatility Skew: Volatility Across Strikes</h2>
      <p>
        Skew shows how IV varies across different strike prices for the same expiration.
      </p>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Key Skew Concepts</h3>
        <ul>
          <li>Wings: OTM options often have higher IV than ATM</li>
          <li>Symmetry: Put wing vs Call wing differences</li>
          <li>Steepness: How quickly IV changes between strikes</li>
        </ul>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <h4>Common Skew Pattern</h4>
          <p>Put wing steeper than call wing (typical for stocks)</p>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h3>Why Does Skew Exist?</h3>
        <p>
          Skew exists because market participants value downside protection more than upside potential.
          This creates the classic reverse skew pattern.
        </p>
      </div>

      <h2>Trading Volatility and Skew</h2>
      <p>
        How to use volatility and skew knowledge in your trading:
      </p>
      
      <div style={{ marginBottom: '2rem' }}>
        <ul>
          <li>Consider selling premium (Iron Condors, Credit Spreads)</li>
          <li>Look for skew opportunities (Risk Reversals)</li>
          <li>Use calendar spreads if term structure is steep</li>
        </ul>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <h4>Example Strategy: Iron Condor</h4>
          <ul>
            <li>Collect premium when IV is high</li>
            <li>Risk of large moves breaking through wings</li>
          </ul>
        </div>
      </div>

      <h2>Volatility Checklist Before Trading</h2>
      <div style={{ marginBottom: '2rem' }}>
        <p>Before placing a trade, check:</p>
        <ul>
          <li>Current IV vs Historical IV</li>
          <li>Term structure shape</li>
          <li>Skew levels</li>
          <li>Upcoming events</li>
        </ul>
      </div>

      <div style={{ 
        marginTop: '3rem',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h2>Ready to Test Your Volatility Knowledge?</h2>
        <Link href="/topics/skew-volatility-recap" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          transition: 'background-color 0.2s'
        }}>
          Take the Quiz →
        </Link>
      </div>
    </div>
  );
}

