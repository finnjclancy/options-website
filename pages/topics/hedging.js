import Link from 'next/link';

export default function Hedging() {
  return (
    <div>
      <h1>Options Hedging: Your Investment Insurance Policy</h1>
      <h2>Protecting Your Portfolio from Market Risks</h2>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          Hedging with options is like buying insurance for your investments. Learn how to protect your 
          portfolio from market downturns and manage risk effectively.
        </p>
        
        <h3>What You'll Learn</h3>
        <ul>
          <li>How to protect your investments from market crashes</li>
          <li>Different hedging strategies for various market conditions</li>
          <li>Real-world examples of effective hedging techniques</li>
        </ul>
      </div>

      <h2>Part 1: Hedging Strategy Overview</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'auto 1fr 1fr',
          gap: '1rem'
        }}>
          <div><strong>Strategy</strong></div>
          <div><strong>Protection Against</strong></div>
          <div><strong>Cost</strong></div>
          
          <div>Protective Put</div>
          <div>Downside risk</div>
          <div>Premium paid</div>
          
          <div>Collar</div>
          <div>Downside risk</div>
          <div>Limited upside</div>
          
          <div>VIX Hedging</div>
          <div>Market volatility</div>
          <div>Premium paid</div>
        </div>
      </div>

      <h3>Strategy 1.1: Protective Put</h3>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p><strong>What It Is:</strong> Buy put options to protect stock positions</p>
        <p><strong>When to Use:</strong> When you want downside protection but unlimited upside</p>
        
        <h4>Key Points:</h4>
        <ul>
          <li>Maximum Loss: Limited to cost of put option</li>
          <li>Maximum Gain: Unlimited upside potential minus put cost</li>
        </ul>
        
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Example:</strong></p>
          <ul>
            <li>Own 100 AAPL at $150</li>
            <li>Buy $140 Put for $3</li>
            <li>If AAPL drops to $120, put protects below $140</li>
            <li>If AAPL stays above $140, lose $3 premium</li>
          </ul>
          <p><strong>Key Point:</strong> Like insurance, puts cost money but provide peace of mind</p>
        </div>
      </div>

      <h3>Strategy 1.2: Collar Strategy</h3>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p><strong>What It Is:</strong> Buy protective put and sell covered call</p>
        <p><strong>When to Use:</strong> When you want low-cost or zero-cost protection</p>
        
        <h4>Key Points:</h4>
        <ul>
          <li>Maximum Loss: Stock price - put strike + net premium</li>
          <li>Maximum Gain: Call strike - stock price - net premium</li>
        </ul>
        
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Example:</strong></p>
          <ul>
            <li>Own 100 AAPL at $200</li>
            <li>Buy $180 Put for $5</li>
            <li>Sell $220 Call for $5</li>
            <li>Protected below $180, capped above $220</li>
            <li>Miss gains above $220</li>
          </ul>
          <p><strong>Key Point:</strong> Zero-cost protection by giving up some upside</p>
        </div>
      </div>

      <h2>Part 2: Advanced Hedging Techniques</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'auto 1fr 1fr',
          gap: '1rem'
        }}>
          <div><strong>Technique</strong></div>
          <div><strong>Purpose</strong></div>
          <div><strong>Complexity</strong></div>
          
          <div>Delta Hedging</div>
          <div>Directional risk</div>
          <div>High</div>
          
          <div>Vega Hedging</div>
          <div>Volatility risk</div>
          <div>High</div>
          
          <div>Gamma Hedging</div>
          <div>Large moves</div>
          <div>Very High</div>
        </div>
      </div>

      <h3>Strategy 2.1: Delta Hedging</h3>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p><strong>What It Is:</strong> Balance positive and negative deltas</p>
        <p><strong>When to Use:</strong> For market-neutral positions</p>
        
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Example:</strong></p>
          <ul>
            <li>Long 100 shares (delta = 1.00)</li>
            <li>Buy 2 ATM puts (delta = -0.50 each)</li>
            <li>Position is now delta-neutral</li>
            <li>Need to adjust as delta changes</li>
          </ul>
          <p><strong>Key Point:</strong> Dynamic strategy requiring active management</p>
        </div>
      </div>

      <h3>Strategy 2.2: Vega Hedging</h3>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p><strong>What It Is:</strong> Protect against volatility changes</p>
        <p><strong>When to Use:</strong> Before high-volatility events</p>
        
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Example:</strong></p>
          <ul>
            <li>Long 1 ATM call (vega = 0.30)</li>
            <li>Short 2 OTM calls (vega = 0.15 each)</li>
            <li>Net vega exposure is neutral (0.30 - 2×0.15 = 0)</li>
            <li>Position needs adjustment as time passes</li>
          </ul>
          <p><strong>Key Point:</strong> Useful before earnings or major market events when volatility might change dramatically</p>
        </div>
      </div>

      <h3>Strategy 2.3: Gamma Hedging</h3>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p><strong>What It Is:</strong> Protect against large price moves</p>
        <p><strong>When to Use:</strong> For large option positions</p>
        
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Example:</strong></p>
          <ul>
            <li>Short 1 ATM straddle (negative gamma)</li>
            <li>Buy 2 OTM strangles (positive gamma)</li>
            <li>Position is now gamma neutral</li>
            <li>Costs money due to buying extra options</li>
          </ul>
          <p><strong>Key Point:</strong> Essential for market makers and those with large option positions</p>
        </div>
      </div>

      <h2>Common Hedging Mistakes to Avoid</h2>
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
          <div><strong>Mistake</strong></div>
          <div><strong>Solution</strong></div>
          
          <div>Over-hedging</div>
          <div>Match hedge size to risk exposure</div>
          
          <div>Static hedging</div>
          <div>Regularly rebalance positions</div>
          
          <div>Wrong timing</div>
          <div>Consider volatility levels</div>
          
          <div>Cost ignorance</div>
          <div>Include hedging costs in returns</div>
        </div>
      </div>

      <h2>Hedging Strategy Selection Guide</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p><strong>Choose Based On:</strong></p>
        <ul>
          <li>Cost tolerance (premium willing to pay)</li>
          <li>Time horizon (how long need protection)</li>
          <li>Management style (active vs passive)</li>
          <li>Market outlook (volatility expectations)</li>
        </ul>
        
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Quick Decision Guide:</strong></p>
          <ul>
            <li>Need cheap protection? → Collars</li>
            <li>Want full protection? → Protective puts</li>
            <li>Active trader? → Delta hedging</li>
            <li>Earnings coming? → Vega hedging</li>
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
        <h2>Ready to Test Your Hedging Knowledge?</h2>
        <Link href="/topics/hedging-recap" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          transition: 'background-color 0.2s'
        }}>
          Take the Hedging Quiz →
        </Link>
      </div>
    </div>
  );
}
