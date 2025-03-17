import Link from 'next/link';

export default function Strategies() {
  return (
    <div>
      <h1>The Ultimate Guide to Options Trading Strategies</h1>
      <h2>Understanding When and How to Use Each Strategy</h2>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          Options strategies are like tools in a toolbox—each one has its specific purpose and best time 
          to use. This guide will help you understand when and how to use each strategy effectively.
        </p>
        
        <h3>What This Guide Covers</h3>
        <ul>
          <li>Setup Instructions → How to enter each trade</li>
          <li>When to Use It → Best market conditions for success</li>
          <li>Profit/Loss Potential → How and when it makes/loses money</li>
        </ul>
      </div>

      <h2>Part 1: Basic Directional Strategies</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'auto 1fr 1fr 1fr',
          gap: '1rem'
        }}>
          <div><strong>Strategy</strong></div>
          <div><strong>Market View</strong></div>
          <div><strong>Risk Level</strong></div>
          <div><strong>Potential Return</strong></div>
          
          <div>Long Call</div>
          <div>Bullish</div>
          <div>Limited</div>
          <div>Unlimited</div>
          
          <div>Long Put</div>
          <div>Bearish</div>
          <div>Limited</div>
          <div>High</div>
          
          <div>Short Call</div>
          <div>Neutral/Bearish</div>
          <div>Unlimited</div>
          <div>Limited</div>
          
          <div>Short Put</div>
          <div>Neutral/Bullish</div>
          <div>High</div>
          <div>Limited</div>
        </div>
      </div>

      <h3>Strategy 1.1: Long Call</h3>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p><strong>What It Is:</strong> Buy a call option to profit from stock price increase</p>
        <p><strong>When to Use:</strong> When you expect a significant upward move</p>
        
        <h4>Risk/Reward Profile:</h4>
        <ul>
          <li>Profit: If stock price rises above strike + premium paid</li>
          <li>Loss: If stock doesn't rise, lose entire premium paid</li>
        </ul>
        
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Example:</strong> Buy a $50 Call on AAPL for $3</p>
          <ul>
            <li>If AAPL rises to $60, you profit big</li>
            <li>If AAPL stays at $50 or lower, you lose the $3 premium</li>
          </ul>
        </div>
      </div>

      <h3>Strategy 1.2: Long Put</h3>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p><strong>What It Is:</strong> Buy a put option to profit from stock price decrease</p>
        <p><strong>When to Use:</strong> When you expect a significant downward move</p>
        
        <h4>Risk/Reward Profile:</h4>
        <ul>
          <li>Profit: If stock price falls below strike - premium paid</li>
          <li>Loss: If stock doesn't drop, lose entire premium paid</li>
        </ul>
        
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Example:</strong> Buy a $50 Put on AAPL for $3</p>
          <ul>
            <li>If AAPL falls to $40, you profit big</li>
            <li>If AAPL stays at $50 or higher, you lose the $3 premium</li>
          </ul>
        </div>
      </div>

      <h2>Part 2: Income Strategies</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'auto 1fr 1fr 1fr',
          gap: '1rem'
        }}>
          <div><strong>Strategy</strong></div>
          <div><strong>Market View</strong></div>
          <div><strong>Risk Level</strong></div>
          <div><strong>Income Potential</strong></div>
          
          <div>Covered Call</div>
          <div>Neutral/Bullish</div>
          <div>Low</div>
          <div>Moderate</div>
          
          <div>Cash-Secured Put</div>
          <div>Neutral/Bullish</div>
          <div>Moderate</div>
          <div>Moderate</div>
          
          <div>Iron Condor</div>
          <div>Neutral</div>
          <div>Limited</div>
          <div>Moderate</div>
          
          <div>Calendar Spread</div>
          <div>Neutral</div>
          <div>Limited</div>
          <div>Moderate</div>
        </div>
      </div>

      <h2>Part 3: Advanced Strategies</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'auto 1fr 1fr 1fr',
          gap: '1rem'
        }}>
          <div><strong>Strategy</strong></div>
          <div><strong>Market View</strong></div>
          <div><strong>Complexity</strong></div>
          <div><strong>Capital Required</strong></div>
          
          <div>Butterfly</div>
          <div>Very Neutral</div>
          <div>High</div>
          <div>Moderate</div>
          
          <div>Ratio Spread</div>
          <div>Directional</div>
          <div>High</div>
          <div>High</div>
          
          <div>Back Spread</div>
          <div>Volatility</div>
          <div>Very High</div>
          <div>High</div>
        </div>
      </div>

      <h2>Strategy Selection Guide</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p><strong>Choose Based On:</strong></p>
        <ul>
          <li>Market outlook (direction and volatility)</li>
          <li>Risk tolerance and capital available</li>
          <li>Time commitment for management</li>
          <li>Experience level with options</li>
        </ul>
        
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Quick Decision Guide:</strong></p>
          <ul>
            <li>Bullish? → Long calls or bull spreads</li>
            <li>Bearish? → Long puts or bear spreads</li>
            <li>Neutral? → Iron condors or butterflies</li>
            <li>High volatility? → Sell premium</li>
            <li>Low volatility? → Buy premium</li>
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
        <h2>Ready to Test Your Strategy Knowledge?</h2>
        <Link href="/topics/strategies-recap" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          transition: 'background-color 0.2s'
        }}>
          Take the Strategies Quiz →
        </Link>
      </div>
    </div>
  );
}
