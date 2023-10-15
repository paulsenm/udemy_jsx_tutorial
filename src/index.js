//Import react/react dom libraries
import React from 'react';
import ReactDOM  from 'react-dom/client';



//get ref to div with id of root
const el = document.getElementById('root');




//give react control of root div
const root = ReactDOM.createRoot(el);



//create component
function App(){
    let message = "Hey ";
    if (Math.random() > 0.5){
        message = "Hello ";
    }

    return( <h1>{message} there!</h1>);
}


//show component
root.render( <App />);