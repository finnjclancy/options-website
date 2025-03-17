import '../styles/global.css';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const currentPath = router.pathname;

  const isActive = (path) => {
    // Handle both the main page and its recap
    return currentPath === path || currentPath === path + '-recap';
  };

  const linkStyle = (path) => ({
    color: isActive(path) ? '#007bff' : '#333',
    textDecoration: 'none',
    fontSize: '0.95rem',
    display: 'block',
    backgroundColor: isActive(path) ? '#e9ecef' : 'transparent',
    padding: '0.5rem',
    borderRadius: '4px',
  });

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '100vh',
      display: 'flex',
    }}>
      <Script src="https://polyfill.io/v3/polyfill.min.js?features=es6" strategy="beforeInteractive" />
      <Script id="MathJax-config" strategy="beforeInteractive">
        {`
          window.MathJax = {
            tex: {
              inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
              displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
              processEscapes: true,
              processEnvironments: true
            },
            options: {
              skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
            }
          };
        `}
      </Script>
      <Script 
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        strategy="beforeInteractive"
      />

      {/* Sidebar Navigation */}
      <div style={{
        width: '280px',
        backgroundColor: '#f8f9fa',
        padding: '2rem 1.5rem',
        borderRight: '1px solid #e0e0e0',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto'
      }}>
        <Link href="/" style={{ 
          textDecoration: 'none', 
          color: 'inherit',
          display: 'block',
          marginBottom: '2rem'
        }}>
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Options Trading</h1>
        </Link>

        {/* Beginner Topics */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ 
            color: '#28a745',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.1rem',
            marginBottom: '1rem'
          }}>
            <span>🌱</span> Beginner Topics
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/topics/introduction" style={linkStyle('/topics/introduction')}>
              1. Introduction to Options
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Basic concepts, calls vs puts, rights & obligations
              </div>
            </Link>
            <Link href="/topics/buying-selling-calls-puts" style={linkStyle('/topics/buying-selling-calls-puts')}>
              2. Buying & Selling Options
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Understanding option positions and basic strategies
              </div>
            </Link>
            <Link href="/topics/strike-expiration" style={linkStyle('/topics/strike-expiration')}>
              3. Strike Price & Expiration
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Choosing strikes, understanding expiration
              </div>
            </Link>
          </div>
        </div>

        {/* Intermediate Topics */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ 
            color: '#007bff',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.1rem',
            marginBottom: '1rem'
          }}>
            <span>📚</span> Intermediate Topics
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/topics/option-greeks" style={linkStyle('/topics/option-greeks')}>
              4. The Greeks
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Delta, gamma, theta, vega, and risk management
              </div>
            </Link>
            <Link href="/topics/strategies" style={linkStyle('/topics/strategies')}>
              5. Option Strategies
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Spreads, straddles, covered calls, and more
              </div>
            </Link>
            <Link href="/topics/hedging" style={linkStyle('/topics/hedging')}>
              6. Hedging Techniques
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Portfolio protection and risk management
              </div>
            </Link>
          </div>
        </div>

        {/* Expert Topics */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ 
            color: '#dc3545',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.1rem',
            marginBottom: '1rem'
          }}>
            <span>🎓</span> Expert Topics
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/topics/skew-volatility" style={linkStyle('/topics/skew-volatility')}>
              7. Volatility & Skew
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Advanced volatility concepts and trading
              </div>
            </Link>
            <Link href="/topics/market-makers" style={linkStyle('/topics/market-makers')}>
              8. Market Makers & Flow
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Understanding dealer positioning and hedging
              </div>
            </Link>
            <Link href="/topics/expirations" style={linkStyle('/topics/expirations')}>
              9. Expiration Mechanics
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Pin risk, max pain, and expiration dynamics
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ 
        flex: 1,
        marginLeft: '280px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <main style={{ 
          flex: '1 0 auto',
          padding: '2rem',
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%'
        }}>
          <Component {...pageProps} />
        </main>
        <footer style={{ 
          marginTop: 'auto',
          padding: '2rem',
          textAlign: 'center',
          borderTop: '1px solid #e0e0e0',
          backgroundColor: '#f5f5f5',
          color: '#666'
        }}>
          <p>© 2025 Finn's Educational Options Website</p>
        </footer>
      </div>
    </div>
  );
}
