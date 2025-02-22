import { Routes, Route, HashRouter, useLocation } from 'react-router-dom';
import './App.css'
import Welcome from './views/welcome/welcome';
import { ThemeProvider } from './context/themecontext';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/"; // Hide navbar only on the main page

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
          </Routes>
        </Layout>
        <Footer />
      </ThemeProvider>
    </HashRouter>
  );
};

export default App
