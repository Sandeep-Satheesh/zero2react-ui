import { useState, useEffect } from 'react';
import './logo.css';

const Logo : React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true); // This runs only on the client side
    }, []);
  
    if (!isClient) return null; // Prevents hydration mismatch
  
  
    return (
        <div className="logo-container">
            <img className="logo" src='app\assets\zero2react-dark.svg' alt="Zero2React Logo" />
        </div>
    );
}

export default Logo;