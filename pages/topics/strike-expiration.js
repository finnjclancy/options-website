import Link from 'next/link';
import Button from '../../components/Button';

export default function StrikeExpiration() {
  return (
    <div>
      <h1>Strike Price & Expiration Selection</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          The strike price and expiration date are the two most important choices when trading options.
          Let's understand how to select them wisely.
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h2>These Choices Determine:</h2>
        <ul>
          <li>How much risk you're taking</li>
          <li>How much you can profit</li>
          <li>How fast your option loses value</li>
        </ul>
      </div>

      <h2>Strike Price Fundamentals</h2>
      <div style={{ marginBottom: '2rem' }}>
        <p>The strike price is the price at which you can buy (call) or sell (put) the underlying stock.</p>
        <p>It affects:</p>
        <ul>
          <li>How much you pay for the option (premium cost)</li>
          <li>The probability of making a profit</li>
          <li>Intrinsic vs. extrinsic value of the option</li>
        </ul>
        <p><strong>Key Takeaway:</strong> The further the strike price is from the current stock price, the cheaper the option but the lower the probability of profit.</p>
      </div>

      <h2>Moneyness: ITM, ATM, and OTM</h2>
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
          <div><strong>Moneyness</strong></div>
          <div><strong>Call Option</strong></div>
          <div><strong>Put Option</strong></div>
          <div><strong>Intrinsic Value</strong></div>
          
          <div>ITM (In the Money)</div>
          <div>Strike price below stock price</div>
          <div>Strike price above stock price</div>
          <div>Has intrinsic value</div>
          
          <div>ATM (At the Money)</div>
          <div>Strike price near stock price</div>
          <div>Strike price near stock price</div>
          <div>Only extrinsic value</div>
          
          <div>OTM (Out of the Money)</div>
          <div>Strike price above stock price</div>
          <div>Strike price below stock price</div>
          <div>No intrinsic value</div>
        </div>
        
        <div style={{ marginTop: '1.5rem' }}>
          <p><strong>Example:</strong> If Apple (AAPL) is trading at $150:</p>
          <ul>
            <li>A $140 Call is ITM</li>
            <li>A $150 Call is ATM</li>
            <li>A $160 Call is OTM</li>
          </ul>
        </div>
        
        <p><strong>Key Takeaway:</strong></p>
        <ul>
          <li>ITM options are more expensive but have higher chances of making money</li>
          <li>OTM options are cheaper but risk expiring worthless</li>
        </ul>
      </div>

      <h2>Choosing the Right Strike Price</h2>
      <div style={{ marginBottom: '2rem' }}>
        <p>Consider these factors when selecting a strike price:</p>
        <ul>
          <li>Your market outlook (bullish/bearish)</li>
          <li>Risk tolerance and account size</li>
          <li>Time until expiration</li>
          <li>Implied volatility levels</li>
        </ul>

        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px'
        }}>
          <h3>Example: Choosing a Call Option Strike Price</h3>
          <p>Stock: Tesla (TSLA) at $200<br />
          You expect TSLA to rise in a month.</p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'auto 1fr 1fr 1fr',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            <div><strong>Strike Price</strong></div>
            <div><strong>Cost (Premium)</strong></div>
            <div><strong>Breakeven Price</strong></div>
            <div><strong>Pros/Cons</strong></div>
            
            <div>$180 (ITM)</div>
            <div>$25</div>
            <div>$205</div>
            <div>High chance of profit, but expensive</div>
            
            <div>$200 (ATM)</div>
            <div>$12</div>
            <div>$212</div>
            <div>Balanced risk/reward</div>
            
            <div>$220 (OTM)</div>
            <div>$4</div>
            <div>$224</div>
            <div>Cheap, but low probability of profit</div>
          </div>
        </div>
        
        <p><strong>Key Takeaway:</strong></p>
        <ul>
          <li>ITM is safer but expensive</li>
          <li>OTM is riskier but cheaper</li>
        </ul>
      </div>

      <h2>Understanding Expiration</h2>
      <p>
        The expiration date is when the option contract ceases to exist.
      </p>
      <div style={{ marginBottom: '2rem' }}>
        <p>After expiration, the option is either exercised or expires worthless.</p>
        
        <h3>Why Expiration Matters:</h3>
        <ul>
          <li>The closer to expiration, the faster Theta Decay (loss of time value)</li>
          <li>Shorter expirations have higher risk but higher profit potential</li>
          <li>Longer expirations are safer but cost more</li>
        </ul>
      </div>

      <h2>Types of Expirations</h2>
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
          <div><strong>Expiration Type</strong></div>
          <div><strong>Characteristics</strong></div>
          <div><strong>Who Uses It?</strong></div>
          
          <div>Weekly Options</div>
          <div>Expire every Friday, short-term trading</div>
          <div>Day traders, scalpers</div>
          
          <div>Monthly Options</div>
          <div>Expire 3rd Friday of each month</div>
          <div>Swing traders, investors</div>
          
          <div>Quarterly Options</div>
          <div>Expire at end of quarters</div>
          <div>Long-term traders</div>
          
          <div>LEAPS (1+ years)</div>
          <div>Long-term options, hedge funds use them</div>
          <div>Investors, hedgers</div>
        </div>
        
        <p style={{ marginTop: '1rem' }}><strong>Key Takeaway:</strong></p>
        <ul>
          <li>Short-term traders use weeklies for fast profits</li>
          <li>Long-term investors use LEAPS for hedging</li>
        </ul>
      </div>

      <h2>Exercise Style Differences</h2>
      <div style={{ marginBottom: '2rem' }}>
        <ul>
          <li>American options can be exercised any time before expiration</li>
          <li>European options can only be exercised at expiration</li>
          <li>Most stock options are American style</li>
          <li>Index options are typically European style</li>
        </ul>
      </div>

      <h2>Time Decay Impact</h2>
      <div style={{ marginBottom: '2rem' }}>
        <ul>
          <li>Theta accelerates as expiration approaches</li>
          <li>ITM options lose value slower than OTM options</li>
        </ul>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <h3>Example: How Time Decay Impacts Option Value</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem'
          }}>
            <div><strong>Days Until Expiration</strong></div>
            <div><strong>Call Price</strong></div>
            
            <div>90 Days</div>
            <div>$8.00</div>
            
            <div>60 Days</div>
            <div>$6.00</div>
            
            <div>30 Days</div>
            <div>$3.50</div>
            
            <div>7 Days</div>
            <div>$1.00</div>
          </div>
        </div>
        <p><strong>Key Takeaway:</strong> The closer you are to expiration, the faster your option loses value.</p>
      </div>

      <h2>Important Expiration Considerations</h2>
      <div style={{ marginBottom: '2rem' }}>
        <p>Before trading options, consider:</p>
        <ul>
          <li>Time Decay: Options lose value faster near expiration</li>
          <li>Liquidity: Closer expirations have more trading volume</li>
          <li>Assignment Risk: ITM options may be exercised early</li>
          <li>Pin Risk: Stock price often gravitates to key strike prices near expiration</li>
        </ul>
      </div>

      <div style={{ 
        marginTop: '3rem',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h2>Ready to Test Your Knowledge?</h2>
        <Link href="/topics/strike-expiration-recap" style={{
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