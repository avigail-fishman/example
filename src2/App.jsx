import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { createCandyStyle } from './components/Styles';


function App() {

  const [money, setMoney] = useState(3);
  const [candies, setCandies] = useState([
    { id: 1, color: "Red", size: "20" },
    { id: 2, color: "Pink", size: "40" },
    { id: 3, color: "Purple", size: "40" },
    { id: 4, color: "Red", size: "20" }]);




  const buyCandy = () => {
    setMoney(money - 1);
    const newCandies = [...candies];
    const myCandy = newCandies.splice(0, 1)[0]; //  הסוכירה שהוצאה
    setCandies(newCandies);

  }
  //דרך זו אינה מקובלת
  // let btn;
  // if(money == 0)
  //   btn =<p>אין מספיק כסף בשביל לקנות</p>;
  // else
  //   btn =  <button onClick={() => { buyCandy() }}>הכנס שקל למכונה וסובב</button>;

  return <>
    <header>
      <h1>Website</h1>
      <nav>
        <a href="#" >Link</a>
        <a href="#" >Link</a>
        <a href="#" >Link</a>
        <a href="#" >Link</a>
      </nav>
    </header>
    <main>
      <div className="candies">
        {/* לא יציג את המערך אם לא קיים */}
        {candies && candies.map(c => <div style={createCandyStyle(c)}></div>)}
        {/* יציג הודעת טעינה אם המערך לא הגיע מהשרת */}
        {candies ? candies.map(c => <div style={createCandyStyle(c)}></div>) : <div>.....בטעינה מהשרת</div>}
        {/* במקרה שהמתכנת צד לקוח אתחל את המערך עם מערך ריק - נשאל כך: */}
        {candies.length ? candies.map(c => <div style={createCandyStyle(c)}></div>) : <div>.....בטעינה מהשרת</div>}

      </div>

      <div  >
        <p>הארנק שלי
        </p>
        <p style={{ color: money == 0 ? "Red" : "Black" }}>
          {money}  ש''ח'
        </p>
        <button onClick={() => { buyCandy() }} disabled={money == 0}>  {money != 0 ? "קנה סוכריה" : "אין לך כסף"}   </button>



        {/* דרך זו לא מקובלת (מתחילה למעלה)*/}
        {/* {btn} */}
      </div>
    </main>
    <footer>
      <p>All rights reserved</p>
    </footer>

  </>

}

export default App;
