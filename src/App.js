import './App.css';

function App() {
  return (
  <div className="App">
    <span className="screen">NUMBERS DISPLAY</span>
      <span className="numDot">
        <span className="num">1</span>
        <span className="num">2</span>
        <span className="num">3</span>
        <span className="num">4</span>
        <span className="num">5</span>
        <span className="num">6</span>
        <span className="num">7</span>
        <span className="num">8</span>
        <span className="num">9</span>
        <span className="num">0</span>
        <span className="oper1">.</span>
        <span className="oper1">=</span>
      </span>
      <span className="operators">
        <span className="oper2">+</span>
        <span className="oper2">-</span>
        <span className="oper2">×</span>
        <span className="oper2">÷</span>
      </span>
  </div>);
}

export default App;