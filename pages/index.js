import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Options Trading Education</h1>

      <div style={{ marginTop: '2rem' }}>
        <h2>Learning Path</h2>
        <p>
          Our content is organized into three levels to help you progress at your own pace. Start with 
          the fundamentals and work your way up to expert-level concepts.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem' 
        }}>
          {/* Beginner Section */}
          <div style={{ 
            padding: '1.5rem',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3 style={{ color: '#28a745' }}>🌱 Beginner Topics</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link href="/topics/introduction" style={{ color: '#007bff', textDecoration: 'none' }}>
                  1. Introduction to Options
                </Link>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0.25rem 0 0 0' }}>
                  Basic concepts, calls vs puts, rights & obligations
                </p>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link href="/topics/buying-selling-calls-puts" style={{ color: '#007bff', textDecoration: 'none' }}>
                  2. Buying & Selling Options
                </Link>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0.25rem 0 0 0' }}>
                  Understanding option positions and basic strategies
                </p>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link href="/topics/strike-expiration" style={{ color: '#007bff', textDecoration: 'none' }}>
                  3. Strike Price & Expiration
                </Link>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0.25rem 0 0 0' }}>
                  Choosing strikes, understanding expiration
                </p>
              </li>
            </ul>
          </div>

          {/* Intermediate Section */}
          <div style={{ 
            padding: '1.5rem',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3 style={{ color: '#007bff' }}>📚 Intermediate Topics</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link href="/topics/option-greeks" style={{ color: '#007bff', textDecoration: 'none' }}>
                  4. The Greeks
                </Link>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0.25rem 0 0 0' }}>
                  Delta, gamma, theta, vega, and risk management
                </p>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link href="/topics/strategies" style={{ color: '#007bff', textDecoration: 'none' }}>
                  5. Option Strategies
                </Link>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0.25rem 0 0 0' }}>
                  Spreads, straddles, covered calls, and more
                </p>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link href="/topics/hedging" style={{ color: '#007bff', textDecoration: 'none' }}>
                  6. Hedging Techniques
                </Link>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0.25rem 0 0 0' }}>
                  Portfolio protection and risk management
                </p>
              </li>
            </ul>
          </div>

          {/* Expert Section */}
          <div style={{ 
            padding: '1.5rem',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3 style={{ color: '#dc3545' }}>🎓 Expert Topics</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link href="/topics/skew-volatility" style={{ color: '#007bff', textDecoration: 'none' }}>
                  7. Volatility & Skew
                </Link>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0.25rem 0 0 0' }}>
                  Advanced volatility concepts and trading
                </p>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link href="/topics/market-makers" style={{ color: '#007bff', textDecoration: 'none' }}>
                  8. Market Makers & Flow
                </Link>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0.25rem 0 0 0' }}>
                  Understanding dealer positioning and hedging
                </p>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link href="/topics/expirations" style={{ color: '#007bff', textDecoration: 'none' }}>
                  9. Expiration Mechanics
                </Link>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0.25rem 0 0 0' }}>
                  Pin risk, max pain, and expiration dynamics
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h2>📈 Why Trade Options Instead of Stocks?</h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '1.5rem'
          }}>
            <div>
              <h4>💰 Leverage</h4>
              <p>
                Control 100 shares of stock with a fraction of the cost, amplifying your potential returns
                while managing risk.
              </p>
            </div>
            <div>
              <h4>🎯 Income Generation</h4>
              <p>
                Generate consistent profits even in sideways markets through premium collection strategies
                like covered calls and cash-secured puts.
              </p>
            </div>
            <div>
              <h4>🔄 Flexibility</h4>
              <p>
                Profit in any market condition - whether the market is going up, down, or sideways,
                there's always an options strategy available.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h2>👥 Who is This For?</h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '1.5rem'
          }}>
            <div>
              <h4>🎓 Beginners</h4>
              <p>
                New to options? We'll guide you from basic concepts to your first trade with clear
                explanations and practical examples.
              </p>
            </div>
            <div>
              <h4>📊 Active Traders</h4>
              <p>
                Ready to enhance your trading? Learn advanced concepts, risk management, and
                sophisticated strategies to improve your results.
              </p>
            </div>
            <div>
              <h4>🏦 Market Professionals</h4>
              <p>
                Dive deep into market mechanics, volatility analysis, and complex pricing models
                to master professional-level concepts.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h2>Getting Started</h2>
          <p>
            If you're new to options trading, we recommend starting with our{' '}
            <Link href="/topics/introduction">Introduction to Options</Link> section. Each topic
            includes detailed explanations, practical examples, and interactive quizzes to test 
            your understanding. After mastering the basics, you can progress to intermediate and 
            expert topics at your own pace.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <h4>⚠️ Important Note:</h4>
            <p style={{ color: '#dc3545' }}>
              Options trading involves significant risk and is not suitable for all investors. 
              Make sure you understand all risks involved and never trade with money you cannot 
              afford to lose. This educational content is for informational purposes only and 
              should not be considered as financial advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
