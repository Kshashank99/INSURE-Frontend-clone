import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import { Container } from '@material-ui/core';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
