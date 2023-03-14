import logo from './logo.svg';
import './App.css';
import MainHeader from './components/header/MainHeader';
import Footer from './components/footer/Footer';
import MainContent from './components/main/MainContent';

function App() {
  return (
    <div className="App">
    <MainHeader />
    <MainContent />
    <Footer />
    </div>
  );
}

export default App;
