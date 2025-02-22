import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css'
import Welcome from './views/welcome/welcome';
import { ThemeProvider } from './context/themecontext';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ThemeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Welcome />} />
          </Routes>
          <Footer />
      </ThemeProvider>
    </HashRouter>
  );
};

export default App
