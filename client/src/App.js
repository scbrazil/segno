import React from 'react';
import AddInstructor from './components/newInstructor/addInstructor.js';

const App = () => {
    return (
        <div>
            <h1>SEGNO. { new Date().toString() }</h1>
            <div><AddInstructor /></div>
        </div>
    )
}

export default App;
