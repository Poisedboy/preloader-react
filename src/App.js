import './App.css';
import { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

function App() {
  const [mode, setMode] = useState('out-in');
  const [toggle, setToggle] = useState(false);
  const changeHandler = (e) => {
    setMode(e.target.value);
  };
  return (
    <div className="app">
      <div>
        <label htmlFor='out-in'>out-in</label>
        <input onChange={(e) => changeHandler(e)} id='out-in' value='out-in' type='radio' name='radio' required />
        <label htmlFor='in-out'>in-out</label>
        <input onChange={(e) => changeHandler(e)} id='in-out' value='in-out' type='radio' name='radio' />
      </div>
      <SwitchTransition mode={mode}>
        <CSSTransition
          key={toggle}
          timeout={500}
          classNames='fade'
          mountOnEnter
          unmountOnExit
        >
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? 'Hello World' : 'Goodbye World'}
          </button>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
