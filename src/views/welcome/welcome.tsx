import Logo from '../../components/logo/logo';
import './welcome.css';
import { useNavigate } from "react-router-dom";

const Welcome: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className='d-flex h-100 flex-column justify-content-center align-items-center'>
            <main className='p-5 items-center justify-center'>
                <Logo />
                <h1 className="text-7xl mt-4 font-bold text-center tagline">Invest. Grow. Succeed.</h1>
                <button type="button"
                    className="text-4xl mt-4 pt-3  btn w-100 btn-rounded btn-lg btn-get-started"
                    onClick={() => navigate('/login')}>
                        <h2 className='font-weight-bold'>Get Started</h2>
                </button>
            </main>
        </div>
    );
}

export default Welcome;