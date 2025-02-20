import Logo from '~/components/logo/logo';
import './welcome.css';
const Welcome : React.FC = () => {
  return (
    <main className='d-flex flex-column justify-content-center align-items-center'>
          <Logo className='w-25 h-25 items-center justify-center' />
          <h1 className="text-7xl mt-4 font-bold text-center tagline">Invest. Grow. Succeed.</h1>
          <button type="button" className="text-4xl mt-4 btn btn-lg btn-get-started">Get Started</button>
    </main>
  );
}

export default Welcome;