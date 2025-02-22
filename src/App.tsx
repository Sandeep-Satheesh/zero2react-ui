import { Routes, Route, HashRouter, useLocation } from 'react-router-dom';
import './App.css'
import Welcome from './views/welcome/welcome';
import { ThemeProvider } from './context/theme-context';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Utils } from './utils/utils';
import Login from './views/login/login';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideNavbar = Utils.hideNavbar(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
        <Footer />
      </ThemeProvider>
    </HashRouter>
  );
};

export default App
