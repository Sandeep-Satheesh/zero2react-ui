import { useState, useEffect } from 'react';
import { useTheme } from '~/context/themecontext';

interface LogoProps {
    className: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true); // This runs only on the client side
    }, []);
  
    if (!isClient) return null; // Prevents hydration mismatch

    var logoPath = 'app/assets/zero2react-dark.svg';

    if (theme === 'light') {
        logoPath = 'app/assets/zero2react-light.svg';
    }
    return (
        <main className={className}>
            <img src={logoPath} alt="Zero2React Logo" />
        </main>
    );
}

export default Logo;