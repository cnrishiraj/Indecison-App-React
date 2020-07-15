import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



ReactDOM.render(<IndecisionApp />,document.getElementById('app'));

//webpack last video
//cutting edge technique to customize classes in our application
//using babel plugin called transform class properties
//this is an example for that
//it has been implemented in indecisionapp.js and addoption.js
//it is a great technique for evenr handlers as they do have a problem maintaing
//with binding but with arrow functions we need not to worry 
// class oldsyntax{
//     constructor(){
//         this.name='rishi';
//         this.getGreeting= this.getGreeting.bind(this);

//     }
//     getGreeting(){
//         return `hi my name is ${this.name}.`;
//     }
// }
// const Oldsyntax=new oldsyntax();
// const getGreeting=Oldsyntax.getGreeting;
// console.log(getGreeting());

// /*----new syntax using babel class properties ----*/
// class newsyntax{
//     name='raj';
//     getGreeting=() => {
//         return `hi my name is ${this.name}`;
//     }
// }
// const Newsyntax=new newsyntax();
// const newgetGreeting=Newsyntax.getGreeting;
// console.log(newgetGreeting());
