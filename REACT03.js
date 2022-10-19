import logo from './logo.svg';
import './App.css';

function Welcome(props){
  return <h1>Olá, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <header class='App-header'>
        <Welcome name='Sara' />
        <Welcome name='Cahal' />
        <Welcome name='Edite' />
      </header>
    </div>
  );
}

export default App;
