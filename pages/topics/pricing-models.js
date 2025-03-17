import Link from 'next/link';

export default function PricingModels() {
  return (
    <div>
      <h2>Options Pricing Models</h2>
      
      <p>
        Options pricing is a complex field that combines mathematical models, market dynamics, and 
        practical trading considerations. Understanding how options are priced is crucial for both 
        traders and investors. For a deeper dive into specific models, see our pages on{' '}
        <Link href="/topics/black-scholes">Black-Scholes</Link>{' '}and{' '}
        <Link href="/topics/buying-selling-volatility">volatility trading</Link>.
      </p>

      <h3>Fundamental Components of Option Pricing</h3>
      <p>
        The price of an option consists of two main components:
      </p>
      <ul>
        <li>
          <strong>Intrinsic Value</strong>: The amount by which an option is in-the-money (ITM). For calls, 
          this is the current stock price minus the strike price. For puts, it's the strike price minus 
          the current stock price. Out-of-the-money (OTM) options have zero intrinsic value.
        </li>
        <li>
          <strong>Extrinsic Value</strong>: Also known as time value or premium, this represents the additional 
          amount traders are willing to pay above intrinsic value. It's influenced by several factors discussed 
          in our <Link href="/topics/option-greeks">Greeks</Link> section.
        </li>
      </ul>

      <h3>Key Pricing Models</h3>
      
      <h4>1. The Black-Scholes Option Pricing Model</h4>
      <p>
        The Black-Scholes model, developed in 1973, revolutionized options pricing. It provides a theoretical 
        estimate of European-style options based on several key assumptions. For more details, visit our{' '}
        <Link href="/topics/black-scholes">Black-Scholes page</Link>.
      </p>
      <p>
        Key inputs include:
      </p>
      <ul>
        <li>Current stock price</li>
        <li>Strike price</li>
        <li>Time to expiration</li>
        <li>Risk-free interest rate</li>
        <li>Volatility</li>
      </ul>

      <h4>2. Binomial Model</h4>
      <p>
        The binomial model uses a discrete-time framework to value options. It's particularly useful for:
      </p>
      <ul>
        <li>American-style options that can be exercised early</li>
        <li>Options with dividend payments</li>
        <li>Understanding the evolution of option value over time</li>
        <li>Explaining options concepts to beginners</li>
      </ul>
      <p>
        The model builds a tree of possible stock price movements, calculating option values at each node. 
        As the number of time steps increases, the binomial model's results converge to those of the 
        Black-Scholes model for European options.
      </p>

      <h4>3. Monte Carlo Simulation</h4>
      <p>
        Monte Carlo methods use random sampling to obtain numerical results. In options pricing, they're 
        particularly valuable for:
      </p>
      <ul>
        <li>Complex path-dependent options</li>
        <li>Options with multiple underlying assets</li>
        <li>Incorporating sophisticated volatility models</li>
        <li>Risk analysis and scenario testing</li>
      </ul>

      <h3>Practical Considerations</h3>
      <p>
        While theoretical models provide a framework, real-world options pricing involves additional 
        considerations. Market makers, discussed in our <Link href="/topics/market-makers">market makers section</Link>, 
        must account for:
      </p>
      <ul>
        <li>Supply and demand dynamics</li>
        <li>Hedging costs and liquidity</li>
        <li>Volatility skew (see our <Link href="/topics/skew-volatility">volatility section</Link>)</li>
        <li>Transaction costs and bid-ask spreads</li>
      </ul>

      <h3>Volatility's Role in Pricing</h3>
      <p>
        Volatility is perhaps the most crucial and complex input in options pricing. Traders distinguish between:
      </p>
      <ul>
        <li>
          <strong>Historical Volatility</strong>: Measured from past price movements
        </li>
        <li>
          <strong>Implied Volatility</strong>: Derived from current market prices
        </li>
        <li>
          <strong>Forward Volatility</strong>: Expected future volatility
        </li>
      </ul>
      <p>
        For more on volatility trading, see our <Link href="/topics/buying-selling-volatility">Buy/Sell Vol</Link> page.
      </p>

      <h3>Model Limitations and Adjustments</h3>
      <p>
        All pricing models have limitations that traders must understand:
      </p>
      <ul>
        <li>Assumptions about normal distributions may not hold in extreme market conditions</li>
        <li>Models may not capture all market dynamics and frictions</li>
        <li>Parameter estimation (especially volatility) introduces uncertainty</li>
        <li>Market microstructure effects can impact actual trading prices</li>
      </ul>

      <h3>Advanced Topics</h3>
      <p>
        Modern options pricing continues to evolve with new models and approaches:
      </p>
      <ul>
        <li>Stochastic volatility models (Heston, SABR)</li>
        <li>Jump-diffusion models for sudden price movements</li>
        <li>Local volatility models</li>
        <li>Machine learning approaches to pricing and calibration</li>
      </ul>

      <p>
        For practical applications of these concepts, see our pages on{' '}
        <Link href="/topics/strategies">trading strategies</Link> and{' '}
        <Link href="/topics/hedging">hedging techniques</Link>. Understanding pricing models is crucial for both 
        theoretical understanding and practical trading success.
      </p>

      <p>
        Modern market making requires sophisticated technology:
      </p>
      <ul>
        <li>
          <strong>Pricing Engines</strong>: High-speed systems running complex{' '}
          <Link href="/topics/black-scholes">pricing models</Link>
        </li>
        <li>
          <strong>Risk Systems</strong>: Real-time monitoring of positions and exposures
        </li>
      </ul>

      <div style={{ 
        marginTop: '3rem',
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid #eee'
      }}>
        <Link href="/topics/pricing-models-recap" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          transition: 'background-color 0.2s',
          ':hover': {
            backgroundColor: '#0056b3'
          }
        }}>
          Test Your Knowledge →
        </Link>
      </div>
    </div>
  );
}
