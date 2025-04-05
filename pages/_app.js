import '../styles/global.css';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const currentPath = router.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the viewport is mobile-sized
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

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

  // Hamburger menu button style
  const hamburgerStyle = {
    display: isMobile ? 'flex' : 'none',
    position: 'fixed',
    top: '1rem',
    left: '1rem',
    zIndex: 1000,
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '2rem',
    height: '2rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0
  };

  // Sidebar style based on mobile and menu state
  const sidebarStyle = {
    width: '280px',
    backgroundColor: '#f8f9fa',
    padding: '2rem 1.5rem',
    borderRight: '1px solid #e0e0e0',
    position: 'fixed',
    height: '100vh',
    overflowY: 'auto',
    zIndex: 999,
    left: isMobile ? (menuOpen ? '0' : '-280px') : '0',
    transition: 'left 0.3s ease-in-out',
    paddingTop: isMobile ? '4rem' : '2rem',
  };

  // Content area style based on mobile
  const contentStyle = {
    flex: 1,
    marginLeft: isMobile ? '0' : '280px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    transition: 'margin-left 0.3s ease-in-out',
  };

  // Overlay for mobile when menu is open
  const overlayStyle = {
    display: isMobile && menuOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 998,
  };

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

      {/* Hamburger Menu Button for Mobile */}
      <button 
        style={hamburgerStyle} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span style={{
          width: '2rem',
          height: '0.25rem',
          background: '#333',
          borderRadius: '10px',
          transition: 'all 0.3s linear',
          transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'
        }}></span>
        <span style={{
          width: '2rem',
          height: '0.25rem',
          background: '#333',
          borderRadius: '10px',
          transition: 'all 0.3s linear',
          opacity: menuOpen ? '0' : '1',
          transform: menuOpen ? 'translateX(20px)' : 'translateX(0)'
        }}></span>
        <span style={{
          width: '2rem',
          height: '0.25rem',
          background: '#333',
          borderRadius: '10px',
          transition: 'all 0.3s linear',
          transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)'
        }}></span>
      </button>

      {/* Background Overlay (Mobile Only) */}
      <div 
        style={overlayStyle}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar Navigation */}
      <div style={sidebarStyle}>
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
      <div style={contentStyle}>
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
