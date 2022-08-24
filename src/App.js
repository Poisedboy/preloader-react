import './App.css';
import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([
    { id: 1, text: 'do a task' },
    { id: 2, text: 'learn English' },
    { id: 3, text: 'do a sport' }]);
  
  const addTodo = () => {
    setTodoList([...todoList, { id: Date.now(), text }]);
  };
  
  return (
    <div className="app">
      <div>
        <input onChange={e => setText(e.target.value)} value={text} type='text' />
        <button onClick={() => addTodo()}>Add</button>
      </div>
      <TransitionGroup
        component='ul'

      >
        {todoList.map(({ id, text }) =>
          <CSSTransition
            key={id}
            timeout={500}
            classNames='todo'
          >
            <li className='todo' key={id} onClick={() => setTodoList([...todoList.filter(todo => todo.id !== id)])}>{id} {text}</li>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

export default App;
