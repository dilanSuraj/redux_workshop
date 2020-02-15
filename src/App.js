import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counter, logged } from './actions';


function App() {
  const counterVal = useSelector(state => state.counter)
  const isLoggedVal = useSelector(state => state.logged)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>
        Counter {counterVal}
      </h1>
      <div>
        <button onClick={ () => dispatch(counter.increment()) }>Increment</button>
        <button onClick={ () => dispatch(counter.decrement()) }>Decrement</button>
        <button onClick={ () => dispatch(counter.multiply()) }>Multply</button>
      </div>

      <div>
        {
          isLoggedVal ? 
          <button onClick={ () => dispatch(logged.logout()) }>Log out</button> : 
          <button onClick={ () => dispatch(logged.signIn()) }>Sign In</button>
        }

      </div>

    </div>

  );
}

export default App;
