import Logo from '~/components/logo/logo';
import './welcome.css';
const Welcome : React.FC = () => {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 bg-black">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <Logo />
          <h1 className="text-7xl font-bold text-center">Invest. Grow. Succeed.</h1>
          <button type="button" className="btn btn-get-started">Get Started</button>
        </header>
      </div>
    </main>
  );
}

export default Welcome;