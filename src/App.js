import React from 'react';
import './App.css';

// 00-props
// import FunctionalCounter from './functional/00-props/Count';
// import ClassicalCounter from './classical/00-props/Count';

// 01-state
// import FunctionalCounter from './functional/01-state/Count';
// import ClassicalCounter from './classical/01-state/Count';

// 02-simple-handler
// import FunctionalCounter from './functional/02-simple-handler/Counter';
// import ClassicalCounter from './classical/02-simple-handler/Counter';

// 03-handler-prop
import FunctionalCounter from './functional/03-handler-prop/Counter';
import ClassicalCounter from './classical/03-handler-prop/Counter';


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
