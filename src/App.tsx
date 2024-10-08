import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FunctionComponent from './examples/FunctionComponent';
import StateWithTS from './examples/StateWithTS';
import Video10 from './examples/Ex_Type/Video10';
import PropsWithTS from './examples/PropsWithTS';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {/* <FunctionComponent /> */}
        {/* <StateWithTS /> */}
        <Video10 defaultName={'HungLee'} defaultAge={24} />
        <PropsWithTS
          name={'Quoc Hung'}
          // age={24}
          //address={'Ho Chi Minh'}
        />
      </p>
    </div>
  );
}

export default App;
