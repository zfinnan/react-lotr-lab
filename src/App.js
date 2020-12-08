import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

function App(props) {
  return (
    <div className="App">
      <Movie
        title={props.fellowship.title}
        hours={props.fellowship.hours}
        minutes={props.fellowship.minutes}
      />
      <Movie 
        title={props.two.title}
        hours={props.two.hours}
        minutes={props.two.minutes}
      />
      <Movie 
        title={props.king.title}
        hours={props.king.hours}
        minutes={props.king.minutes}
      />
    </div>
  );
}

export default App;
