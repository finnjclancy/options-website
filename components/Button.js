import Link from 'next/link';

export default function Button({ href, onClick, children, variant = 'primary', style = {} }) {
  const baseStyles = {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: variant === 'primary' ? '#28a745' : '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
    ...style
  };

  const hoverStyles = {
    backgroundColor: variant === 'primary' ? '#218838' : '#0056b3'
  };

  if (href) {
    return (
      <Link 
        href={href} 
        style={{
          ...baseStyles,
          ':hover': hoverStyles
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={baseStyles}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = hoverStyles.backgroundColor;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = baseStyles.backgroundColor;
      }}
    >
      {children}
    </button>
  );
} 