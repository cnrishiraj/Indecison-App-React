import React from 'react';


export default class AddOption extends React.Component{
    //new syntax using babel transform class properties
    state={
        error:undefined
    };


     //old syntax i.e is Es6    
    // constructor(props){
    //     super(props);
    //     this.handleAddOption=this.handleAddOption.bind(this);
    //     // this.state={
    //     //     error:undefined
    //     // };
    // }

     //this is a event handler with 
    //new syntax i.e transform class properties babel( arrow function )
    //same in indecisionapp.js file 
    handleAddOption =(e) =>{
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        const error=this.props.handleAddOption(option);
    this.setState(()=> ({ error }));
    if(!error){
        e.target.elements.option.value='';
    }
    };

    //same upper code but with old babel syntax i.e es6
    //   handleAddOption(e){
    //     e.preventDefault();
    //     const option=e.target.elements.option.value.trim();
    //     const error=this.props.handleAddOption(option);

    //     //implicitly returning object *1
    //     this.setState(()=> ({ error }));
    //      // this.setState(()=>{
    //     //     return{
    //     //         error
    //     //     };
    //     // });
      
    //     //after on submit , for no text in textbox
    // if(!error){
    //     e.target.elements.option.value='';
    // }
    // }

    render(){
        return (
            <div>
            {this.state.error && <p className="add-option-error">{this.state.error   }</p>}
            <form className="add-option" onSubmit={this.handleAddOption}>
            <input className="add-option__text" type="text" name="option"></input>
            <button className="button">add option</button>
            
            </form>
            </div>
        );
    }

}