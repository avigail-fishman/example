import './App.css';

import { navStyle } from './styles';
import { Routing } from './components/Routing';
import { Link } from 'react-router-dom';


function App() {



  return <>
    <header>
      <h1>אתר המתכונים המדהים</h1>
      <nav style={navStyle}>
        <Link to="home">דף הבית</Link>
        <Link to="about">אודות </Link>
        <Link to="recipies">מתכונים </Link>
        <Link to="profile">אזור אישי </Link>
      </nav>
    </header>
    <main>
      <Routing />
    </main>
    <footer>&copy;  כל הזכויות שמורות</footer>
  </>

}

export default App;
