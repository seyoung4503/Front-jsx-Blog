import logo from './logo.svg';
import './App.css';

function App() {

  // jsx 사용시 데이터 바인딩이 매우 쉽다. 
  let posts = '고기 먹고 싶다';

  return (
    <div className="App">
      <div className ="black-nav">
        <div> 개발 blog </div>
      </div>
      <h4> {posts} </h4>
    </div>
  );
}

export default App;
