import Link from 'next/link';

export default function OptionGreeks() {
  return (
    <div>
      <h1>The Option Greeks: Your Trading Dashboard</h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          If options trading is like driving a car, the Greeks are your dashboard indicators:
        </p>
        <ul>
          <li>Delta → Speed (how fast your option's price moves)</li>
          <li>Gamma → Acceleration (how much the speed changes)</li>
          <li>Theta → Fuel gauge (how time affects value)</li>
          <li>Vega → Handling (how the car reacts to road conditions)</li>
          <li>Rho → Wind resistance (small, but impacts long-term performance)</li>
        </ul>
        <p><strong>Why Greeks Matter:</strong></p>
        <ul>
          <li>Measure and manage risk</li>
          <li>Choose the right trades</li>
          <li>Understand price changes</li>
          <li>Make informed decisions</li>
        </ul>
      </div>

      <h2>Delta (Δ): Your Speed Indicator</h2>
      <div style={{ marginBottom: '2rem' }}>
        <p>
          Delta measures how much an option's price changes when the stock price moves $1.
        </p>
        <ul>
          <li>Call deltas range from 0 to 1.0</li>
          <li>Put deltas range from -1.0 to 0</li>
          <li>ATM options have deltas around 0.50 or -0.50</li>
        </ul>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <h3>Delta Applications</h3>
          <ul>
            <li>Directional Bias → High delta for big moves</li>
            <li>Hedging → Delta shows shares needed to hedge</li>
            <li>Probability → ~70% chance of profit in this case</li>
          </ul>
        </div>
      </div>

      <h2>Gamma (Γ): Your Acceleration Gauge</h2>
      <div style={{ marginBottom: '2rem' }}>
        <p>
          Gamma measures how quickly delta changes as the stock price moves.
        </p>
        <ul>
          <li>Highest for ATM options</li>
          <li>Increases near expiration</li>
          <li>Shows risk of rapid changes</li>
        </ul>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <h3>Why Gamma Matters</h3>
          <p>
            High gamma positions can change rapidly, requiring more active management.
            Near expiration, gamma risk increases dramatically for ATM options.
          </p>
        </div>
      </div>

      <h2>Theta (Θ): The Time Decay Meter</h2>
      <div style={{ marginBottom: '2rem' }}>
        <p>
          Theta measures how much an option loses value each day due to time passing.
        </p>
        <ul>
          <li>Usually negative for long options</li>
          <li>Accelerates as expiration approaches</li>
          <li>Highest for ATM options near expiration</li>
        </ul>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <h3>Theta Strategies</h3>
          <p>
            Option sellers benefit from theta decay, while buyers fight against it.
            Longer-dated options have less theta decay per day.
          </p>
        </div>
      </div>

      <h2>Vega: The Volatility Gauge</h2>
      <div style={{ marginBottom: '2rem' }}>
        <p>
          Vega measures how much an option's price changes when implied volatility changes by 1%.
        </p>
        <ul>
          <li>Higher for longer-dated options</li>
          <li>Peaks for ATM options</li>
          <li>Critical during earnings or news events</li>
        </ul>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <h3>Vega Trading Tips</h3>
          <ul>
            <li>Buy when IV is low</li>
            <li>Sell when IV is high</li>
            <li>Watch for earnings crush</li>
          </ul>
        </div>
      </div>

      <h2>Rho (ρ): The Interest Rate Meter</h2>
      <div style={{ marginBottom: '2rem' }}>
        <p>
          Rho measures how an option's price changes when interest rates change.
        </p>
        <ul>
          <li>Usually positive for calls, negative for puts</li>
          <li>Larger for longer-dated options</li>
          <li>Often ignored but important in high interest rate environments</li>
        </ul>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <h3>When Rho Matters</h3>
          <p>
            Rho becomes more important for LEAPS (long-term options) and during periods of changing interest rates.
          </p>
        </div>
      </div>

      <h2>Greek Relationships Summary</h2>
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
          <div><strong>Greek</strong></div>
          <div><strong>Call Impact</strong></div>
          <div><strong>Put Impact</strong></div>
          
          <div>Delta</div>
          <div>+0.1 to +1.0</div>
          <div>-1.0 to -0.1</div>
          
          <div>Gamma</div>
          <div>Always positive</div>
          <div>Always positive</div>
          
          <div>Theta</div>
          <div>Usually negative</div>
          <div>Usually negative</div>
          
          <div>Vega</div>
          <div>Usually positive</div>
          <div>Usually positive</div>
          
          <div>Rho</div>
          <div>Usually positive</div>
          <div>Usually negative</div>
        </div>
      </div>

      <h2>Advanced Greeks</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h3>Charm (Delta Decay)</h3>
        <ul>
          <li>How delta changes with time</li>
          <li>Important near expiration</li>
          <li>Affects hedging decisions</li>
        </ul>
        
        <h3>Vanna (Delta-Vol Relationship)</h3>
        <ul>
          <li>How delta changes with volatility</li>
          <li>Key for volatility trading</li>
          <li>Affects position sizing</li>
        </ul>
        
        <h3>Volga (Vega Convexity)</h3>
        <ul>
          <li>How vega changes with volatility</li>
          <li>Important for vol strategies</li>
          <li>Second-order vol risk</li>
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
        <Link href="/topics/option-greeks-recap" style={{
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
