import React from 'react';
import './App.css';

// 00-props
import FunctionalCounter from './00-props/functional/Count';
import ClassicalCounter from './00-props/classical/Count';

// 01-state
// import FunctionalCounter from './01-state/functional/Count';
// import ClassicalCounter from './01-state/classical/Count';

// 02-simple-handler
// import FunctionalCounter from './02-simple-handler/functional/Counter';
// import ClassicalCounter from './02-simple-handler/classical/Counter';

// 03-handler-prop
// import FunctionalCounter from './03-handler-prop/functional/Counter';
// import ClassicalCounter from './classical/03-handler-prop/Counter';

// 04-side-effects


// 05-context
// import FunctionalCounter from './05-context/functional/Counter';
// import ClassicalCounter from './05-context/classical/Counter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Functional: <FunctionalCounter count={2} />
          <hr/>
          Classical: <ClassicalCounter count={2} />
        </div>
      </header>
    </div>
  );
}

export default App;
