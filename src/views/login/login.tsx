import './login.css';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
const Login: React.FC = () => {
    return (
        <main className='d-flex mt-5 flex-column justify-content-center align-items-center'>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_SIGNIN_CLIENT_ID}>
                <h1 className="text-7xl mt-4 font-bold text-center tagline">Get Started</h1>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    useOneTap
                />
            </GoogleOAuthProvider>
        </main>
    );
}

export default Login;