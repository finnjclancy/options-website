import Link from 'next/link';
import Button from '../../components/Button';

export default function BuyingSellingCallsPuts() {
  return (
    <div>
      <h1>Buying & Selling Options: Calls and Puts</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Did you know you can bet on a stock rising or falling without actually owning it?
          That's exactly what call and put options allow you to do.
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h2>Quick Guide</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <h3>Want to profit when a stock rises?</h3>
            <p>→ Buy a Call Option</p>
          </div>
          <div>
            <h3>Want to profit when a stock falls?</h3>
            <p>→ Buy a Put Option</p>
          </div>
        </div>
      </div>

      <h2>Call Options: The Right to Buy</h2>
      <p>
        A call option gives you the right, but not the obligation, to buy a stock at a fixed price (strike price) 
        before a certain date.
      </p>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Why Buy a Call?</h3>
        <ul>
          <li>You are bullish (expect stock price to go up)</li>
          <li>You want to control 100 shares without paying full price</li>
          <li>Your risk is limited to the premium you paid</li>
          <li>Your profit potential is unlimited (if the stock skyrockets)</li>
        </ul>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h3>Example: Buying a Call</h3>
        <p>You buy a $50 Call on Apple (AAPL) for $2 per contract.</p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'auto 1fr 1fr',
          gap: '1rem',
          marginTop: '1rem'
        }}>
          <div><strong>Scenario</strong></div>
          <div><strong>AAPL Price at Expiration</strong></div>
          <div><strong>Profit/Loss</strong></div>
          
          <div>Stock Rises</div>
          <div>$60</div>
          <div style={{ color: 'green' }}>+$800 (since you paid $200 for the contract)</div>
          
          <div>Stock Flat</div>
          <div>$50</div>
          <div style={{ color: 'red' }}>-$200 (max loss)</div>
          
          <div>Stock Falls</div>
          <div>$40</div>
          <div style={{ color: 'red' }}>-$200 (max loss)</div>
        </div>
        <p style={{ marginTop: '1rem' }}><strong>Key Takeaway:</strong> A call buyer only loses the premium paid, but profits if the stock rises.</p>
      </div>

      <h2>Put Options: The Right to Sell</h2>
      <p>
        A put option gives you the right, but not the obligation, to sell a stock at a fixed price before expiration.
      </p>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Why Buy a Put?</h3>
        <ul>
          <li>You are bearish (expect stock price to fall)</li>
          <li>You want to profit from a declining market</li>
          <li>You can hedge your existing stocks against losses</li>
          <li>Your risk is limited to the premium paid</li>
        </ul>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h3>Example: Buying a Put</h3>
        <p>You buy a $50 Put on Tesla (TSLA) for $3 per contract.</p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'auto 1fr 1fr',
          gap: '1rem',
          marginTop: '1rem'
        }}>
          <div><strong>Scenario</strong></div>
          <div><strong>TSLA Price at Expiration</strong></div>
          <div><strong>Profit/Loss</strong></div>
          
          <div>Stock Falls</div>
          <div>$40</div>
          <div style={{ color: 'green' }}>+$700 (since you paid $300 for the contract)</div>
          
          <div>Stock Flat</div>
          <div>$50</div>
          <div style={{ color: 'red' }}>-$300 (max loss)</div>
          
          <div>Stock Rises</div>
          <div>$60</div>
          <div style={{ color: 'red' }}>-$300 (max loss)</div>
        </div>
        <p style={{ marginTop: '1rem' }}><strong>Key Takeaway:</strong> A put buyer profits when the stock price drops.</p>
      </div>

      <h2>Selling (Writing) Options</h2>
      <p>
        When you sell (write) an option, you take the opposite side of the trade. You collect the premium upfront 
        but accept obligations:
      </p>
      <ul>
        <li>Selling a Call → You agree to sell shares at the strike price</li>
        <li>Selling a Put → You agree to buy shares at the strike price</li>
      </ul>
      <div style={{ marginTop: '1rem' }}>
        <p>Call Seller Risk: If the stock rises sharply, you could face unlimited losses.</p>
        <p>Put Seller Risk: If the stock crashes, you must buy it at the higher strike price.</p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h3>Risk/Reward Summary</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'auto 1fr 1fr',
          gap: '1rem',
          marginTop: '1rem'
        }}>
          <div><strong>Position</strong></div>
          <div><strong>Maximum Profit</strong></div>
          <div><strong>Maximum Loss</strong></div>
          
          <div>Call Buyer</div>
          <div>Unlimited</div>
          <div>Premium Paid</div>
          
          <div>Call Seller</div>
          <div>Premium Received</div>
          <div>Unlimited</div>
          
          <div>Put Buyer</div>
          <div>Strike Price - Premium</div>
          <div>Premium Paid</div>
          
          <div>Put Seller</div>
          <div>Premium Received</div>
          <div>Strike Price - 0</div>
        </div>
      </div>

      <h2>Option Moneyness: ITM, ATM, OTM</h2>
      <p>Options are categorized by "moneyness" (relationship to stock price).</p>
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
          <div><strong>Moneyness</strong></div>
          <div><strong>Call Option</strong></div>
          <div><strong>Put Option</strong></div>
          
          <div>ITM (In the Money)</div>
          <div>Stock above strike price</div>
          <div>Stock below strike price</div>
          
          <div>ATM (At the Money)</div>
          <div>Stock at strike price</div>
          <div>Stock at strike price</div>
          
          <div>OTM (Out of the Money)</div>
          <div>Stock below strike price</div>
          <div>Stock above strike price</div>
        </div>
        <p style={{ marginTop: '1rem' }}>
          <strong>Example:</strong><br />
          If AAPL is trading at $52:<br />
          - A $50 Call is ITM<br />
          - A $50 Put is OTM
        </p>
      </div>

      <h2>Common Option Trading Strategies</h2>
      <div style={{ marginBottom: '2rem' }}>
        <p>These basic options can be combined into powerful strategies:</p>
        
        <div style={{ marginTop: '1.5rem' }}>
          <h3>1. Covered Call (Collect Income on Stocks You Own)</h3>
          <ul>
            <li>You own the stock and sell a call</li>
            <li>If the stock rises, your shares get sold at the strike price</li>
            <li>If the stock stays flat, you keep the premium as income</li>
          </ul>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <h3>2. Protective Put (Hedge Against Losses)</h3>
          <ul>
            <li>You own the stock and buy a put</li>
            <li>If the stock drops, the put protects your downside</li>
          </ul>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <h3>3. Long Straddle (Profit From Volatility)</h3>
          <ul>
            <li>Buy 1 Call & 1 Put at the same strike</li>
            <li>Big profits if the stock moves A LOT in either direction</li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '1.5rem'
        }}>
          <h3>Why Use These Strategies?</h3>
          <ul>
            <li>Covered Calls → Income Generation</li>
            <li>Protective Puts → Portfolio Protection</li>
            <li>Straddles → Betting on Big Moves</li>
          </ul>
        </div>
      </div>

      <h2>Important Considerations When Trading Options</h2>
      <div style={{ marginBottom: '2rem' }}>
        <ul>
          <li>Time Decay: Options lose value as expiration approaches</li>
          <li>Liquidity: Make sure you can exit the trade when needed</li>
          <li>Assignment Risk: Be prepared if your options get exercised</li>
          <li>Volatility: Higher volatility means more expensive options</li>
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
        <Link href="/topics/buying-selling-calls-puts-recap" style={{
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
