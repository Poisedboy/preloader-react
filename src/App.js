import './App.css';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [loaderVisible, setLoaderVisible] = useState(false);
  
  return (
    <div className="app">
      <button onClick={() => setLoaderVisible(!loaderVisible)}>{loaderVisible ? 'HIDE' : 'SHOW'}</button>
      <div className='wrap'>
        <CSSTransition
          in={loaderVisible}
          timeout={500}
          classNames={{
            enterActive: 'circle-show',
            enterDone: 'circle-rotate',
            exitActive: 'circle-hide'
          }}
          mountOnEnter
          unmountOnExit
        >
          <div className='circle' />
        </CSSTransition>
      </div>
    </div>
  );
}

export default App;
