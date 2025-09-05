import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  onClick 
}: CTAButtonProps) {
  const baseClasses = 'cta-button';
  const variantClass = `cta-button--${variant}`;
  const sizeClass = `cta-button--${size}`;
  const classes = `${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim();

  if (href.startsWith('#')) {
    return (
      <a 
        href={href} 
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      href={href} 
      className={classes}
      onClick={onClick}
      target="_blank"
    >
      {children}
    </Link>
  );
}

