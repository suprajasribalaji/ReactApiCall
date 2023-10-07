import logo from './logo.svg';
import './App.css';
import ApiCall from './components/ApiCall';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h3>https://jsonplaceholder.typicode.com/posts </h3>
      </div>
      <div className='breakpoints'>
        <hr/>
      </div>
      <div className='api-call'>
        <ApiCall />
      </div>
    </div>
  );
}

export default App;
