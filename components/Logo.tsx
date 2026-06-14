interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
}

export default function Logo({ size = 'md', variant = 'default' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl', 
    lg: 'text-3xl'
  };

  const colorClasses = {
    default: 'text-gray-900',
    white: 'text-white'
  };

  return (
    <div className={`font-bold ${sizeClasses[size]} ${colorClasses[variant]} flex items-center`}>
      <span className="relative">
        K
        <span className="text-primary">-</span>
        <span className={colorClasses[variant]}>B</span>
        <span className="text-primary">ops</span>
        <div className="absolute -top-1 -right-2 w-2 h-2 bg-primary rounded-full animate-pulse opacity-70"></div>
      </span>
    </div>
  );
}