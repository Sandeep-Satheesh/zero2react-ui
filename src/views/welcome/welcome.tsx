import Logo from '../../components/logo/logo';
import './welcome.css';
import { useNavigate } from "react-router-dom";

const Welcome: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className='h-100 d-flex justify-content-center align-items-center'>
            <main className='d-flex flex-column align-items-center justify-center'>
                <Logo className='pt-3 flex-1 h-100 w-100' />
                <h1 className="text-7xl mt-4 font-bold text-center tagline">Invest. Grow. Succeed.</h1>
                <button type="button"
                    className="text-4xl mt-4 pt-3  btn w-100 btn-rounded btn-lg btn-get-started"
                    onClick={() => navigate('/login')}>
                        <h3 className='font-weight-bold'>Get Started</h3>
                </button>
            </main>
        </div>
    );
}

export default Welcome;