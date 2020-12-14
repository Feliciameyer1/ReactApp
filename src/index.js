//import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


//create a react component
const App= function() {
    const buttonText="click me"
    return <div>
        <label class="label" for="name">Enter your name:</label>
        <input type="text" id="name"/>
<button style={{backgroundColor:'blue', color:'white'}} >{buttonText}</button>
        </div>;
};


//take the react component and show it on the screen
ReactDOM.render(
    <App />, document.querySelector('#root')
);