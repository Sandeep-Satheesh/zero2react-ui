import Logo from '~/components/logo/logo';
import './welcome.css';
import { GoogleLogin } from '@react-oauth/google';
const Welcome: React.FC = () => {
    return (
        <main className='d-flex mt-5 flex-column justify-content-center align-items-center'>
            <Logo className='w-25 h-25 items-center justify-center' />
            <h1 className="text-7xl mt-4 font-bold text-center tagline">Invest. Grow. Succeed.</h1>
            {/* <button type="button" className="google-signin-btn text-4xl mt-4 pt-2 pb-2 pl-2 pr-2 btn btn-rounded btn-lg btn-get-started">Get Started</button> */}
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                useOneTap
            />
        </main>
    );
}

export default Welcome;