import './App.css';
import imgs from './images.js';
import Header from './Header.js'

function App() {
  return (
    <div>
      <Header/>
      Stuff here
      <img src={imgs.oneSixSix}/>
    </div>
  );
}

export default App;
