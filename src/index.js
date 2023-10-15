//Import react/react dom libraries
import React from 'react';
import ReactDOM  from 'react-dom/client';



//get ref to div with id of root
const el = document.getElementById('root');




//give react control of root div
const root = ReactDOM.createRoot(el);



//create component
function App(){
    return <h1>Hello world</h1>;
}


//show component
root.render( <App />);