import React from 'react';

//using stateless concept 
const Action =(props) =>(
        
        <div>
        <button  className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        what should i do ?
        </button>
        </div>
    );   


//using class component 
// class Action extends React.Component{
//     render(){
//         return (
        
//             <div>
//             <button 
//             onClick={this.props.handlePick}
//             disabled={!this.props.hasOptions}
//             >
//             what should i do ?
//             </button>
//             </div>
//         );
//     }
// }
 export default Action;