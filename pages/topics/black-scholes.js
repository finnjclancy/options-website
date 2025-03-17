import Link from 'next/link';

export default function BlackScholes() {
  return (
    <div>
      <h2>The Black-Scholes Option Pricing Model</h2>
      
      <p>
        The Black-Scholes-Merton model, often simply called Black-Scholes, is the foundational framework 
        for modern options pricing. Developed by Fischer Black, Myron Scholes, and Robert Merton in 1973, 
        it earned Scholes and Merton the 1997 Nobel Prize in Economics (Black had passed away by then).
      </p>

      <h3>The Model's Significance</h3>
      <p>
        Black-Scholes revolutionized financial markets by providing a theoretical framework for options 
        pricing. While the model has limitations (discussed below), it remains the cornerstone of options 
        theory and is essential knowledge for anyone involved in options trading. For practical applications, 
        see our <Link href="/topics/pricing-models">pricing models overview</Link>.
      </p>

      <h3>Key Assumptions</h3>
      <p>
        The model makes several important assumptions:
      </p>
      <ul>
        <li>The stock price follows a geometric Brownian motion with constant volatility</li>
        <li>No arbitrage opportunities exist</li>
        <li>Risk-free interest rate is constant and known</li>
        <li>No transaction costs or taxes</li>
        <li>Securities are perfectly divisible</li>
        <li>Short selling is permitted</li>
        <li>European-style options (no early exercise)</li>
      </ul>

      <h3>The Formula</h3>
      <p>
        The Black-Scholes formula for a call option is:
      </p>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '2rem',
        margin: '1rem 0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        fontFamily: 'serif'
      }}>
        <div style={{ fontSize: '1.2em', marginBottom: '1.5rem', textAlign: 'center' }}>
          <div>{'\\[C = S_0 N(d_1) - Ke^{-rT} N(d_2)\\]'}</div>
        </div>
        <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
          where {'\\(d_1\\)'} and {'\\(d_2\\)'} are given by:
        </div>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          {'\\[d_1 = \\frac{\\ln(\\frac{S_0}{K}) + (r + \\frac{\\sigma^2}{2})T}{\\sigma\\sqrt{T}}\\]'}
        </div>
        <div style={{ textAlign: 'center' }}>
          {'\\[d_2 = d_1 - \\sigma\\sqrt{T}\\]'}
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa',
        padding: '1.5rem',
        margin: '1rem 0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h4 style={{ marginTop: 0 }}>Variables:</h4>
        <ul style={{ 
          listStyle: 'none',
          padding: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          <li>{'\\(S_0\\)'} = Current stock price</li>
          <li>{'\\(K\\)'} = Strike price</li>
          <li>{'\\(r\\)'} = Risk-free rate</li>
          <li>{'\\(T\\)'} = Time to expiration</li>
          <li>{'\\(\\sigma\\)'} = Volatility</li>
          <li>{'\\(N(\\cdot)\\)'} = Normal CDF</li>
        </ul>
      </div>

      <h3>The Greeks in Black-Scholes</h3>
      <div style={{ 
        backgroundColor: '#f8f9fa',
        padding: '1.5rem',
        margin: '1rem 0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Delta (Δ):</strong><br/>
            Calls: {'\\(\\Delta_c = N(d_1)\\)'}<br/>
            Puts: {'\\(\\Delta_p = N(d_1) - 1\\)'}
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Gamma (Γ):</strong><br/>
            {'\\[\\Gamma = \\frac{N\'(d_1)}{S_0\\sigma\\sqrt{T}}\\]'}
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Theta (Θ):</strong><br/>
            Calls: {'\\[\\Theta_c = -\\frac{S_0N\'(d_1)\\sigma}{2\\sqrt{T}} - rKe^{-rT}N(d_2)\\]'}
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Vega (ν):</strong><br/>
            {'\\[\\nu = S_0\\sqrt{T}N\'(d_1)\\]'}
          </li>
          <li>
            <strong>Rho (ρ):</strong><br/>
            Calls: {'\\[\\rho_c = KTe^{-rT}N(d_2)\\]'}
          </li>
        </ul>
      </div>

      <h3>Practical Applications</h3>
      <p>
        Market participants use Black-Scholes in various ways:
      </p>
      <ul>
        <li>
          <strong>Pricing</strong>: As a starting point for option valuation, especially for 
          <Link href="/topics/market-makers"> market makers</Link>
        </li>
        <li>
          <strong>Risk Management</strong>: Using the Greeks for <Link href="/topics/hedging">portfolio hedging</Link>
        </li>
        <li>
          <strong>Implied Volatility</strong>: Backing out market expectations of volatility 
          (see <Link href="/topics/skew-volatility">volatility section</Link>)
        </li>
        <li>
          <strong>Strategy Development</strong>: Analyzing potential trades and their risk characteristics
        </li>
      </ul>

      <h3>Model Limitations</h3>
      <p>
        While revolutionary, Black-Scholes has several known limitations:
      </p>
      <ul>
        <li>
          <strong>Constant Volatility Assumption</strong>: Markets exhibit volatility skew and term structure
          (see <Link href="/topics/skew-volatility">skew and volatility</Link>)
        </li>
        <li>
          <strong>Log-Normal Distribution</strong>: Real markets have fat tails and skewness
        </li>
        <li>
          <strong>Continuous Trading</strong>: Real markets have gaps and trading hours
        </li>
        <li>
          <strong>No Transaction Costs</strong>: Real trading involves significant frictions
        </li>
      </ul>

      <h3>Modern Extensions</h3>
      <p>
        Various extensions address these limitations:
      </p>
      <ul>
        <li>Stochastic volatility models (Heston)</li>
        <li>Local volatility models (Dupire)</li>
        <li>Jump-diffusion models (Merton)</li>
        <li>CEV models for volatility skew</li>
      </ul>

      <h3>Impact on Trading</h3>
      <p>
        Understanding Black-Scholes is crucial for:
      </p>
      <ul>
        <li>
          <strong>Volatility Trading</strong>: See our <Link href="/topics/buying-selling-volatility">Buy/Sell Vol</Link> page
        </li>
        <li>
          <strong>Risk Management</strong>: Covered in our <Link href="/topics/hedging">hedging section</Link>
        </li>
        <li>
          <strong>Strategy Development</strong>: Explored in our <Link href="/topics/strategies">strategies section</Link>
        </li>
        <li>
          <strong>Market Making</strong>: Discussed in our <Link href="/topics/market-makers">market makers</Link> page
        </li>
      </ul>

      <p>
        While no model is perfect, Black-Scholes provides the fundamental framework for understanding 
        options pricing and risk. Modern traders combine its insights with practical experience and 
        additional tools to navigate today's markets effectively.
      </p>

      <div style={{ 
        marginTop: '3rem',
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid #eee'
      }}>
        <Link href="/topics/black-scholes-recap" style={{
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
