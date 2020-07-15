import React from 'react';

//using stateless functional componenet 
 const Option=(props) => (
        <div className="option">
        <p className="option__text">{props.count}.{props.optionText}</p>
        <button 
        className="button button--link"
        onClick={(e)=>{
            props.handleDeleteOptionSingular(props.optionText ) }} >
        remove
        </button>
        </div>
    );


//using class based component 
// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//             {this.props.optionText}
//             </div>
//         );
//     }

// }

export default Option;0
