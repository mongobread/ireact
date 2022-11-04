import logo from './logo.svg';
import './App.css';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go React Yay!
        </a>
      </header>

      <TawkMessengerReact
        propertyId="5ef856c14a7c6258179b7a56"
        widgetId="1fk70kqv5"
      />
    </div>
  );
}

export default App;
