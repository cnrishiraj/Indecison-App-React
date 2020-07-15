//stateless functional component
//=> action header options option


class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOptionSingular=this.handleDeleteOptionSingular.bind(this);
        this.state={
            options:[]
        };
    }

    //life cycle methods
        componentDidMount() {
        
            try{
                const json=localStorage.getItem('options');
            const options=JSON.parse(json);

            if(options){
            this.setState(()=>( {options}));
                       }
            }catch(e){

            }
        }

        componentDidUpdate(prevProps,prevState)
        {
            if(prevState.options.length !== this.state.options.length){
                const json=JSON.stringify(this.state.options);
                localStorage.setItem('options',json);

            }            

        }

        componentWillUnmount(){
            console.log('componentWillUnmount!!');
        }

    //*1
    //converting from explictily i.e return to implicitly returning an object
    //similarly  for 2 handleAddOptions methods
    //i.e arrow function short hand setup 
    
    //*1
    
    handleDeleteOptions(){
        this.setState(()=>({options:[]}));
    }


    //the same code with return
    // handleDeleteOptions(){
    //     this.setState(()=>{
    //         return {
    //             options:[]
    //         };
    //     });
    // }


//delete a option using setState
handleDeleteOptionSingular(optionToRemove){

//filter=>Return true to keep the element, false otherwise.
//!= checks the value
//!== checks the value and type
//'1' != 1   // false (these two are the same)
//'1' !== 1 // true (these two are **not** the same).   
//here optionToRemove and option will be same so it will be false therefore it will be 
//removed 

this.setState((prevState)=>({
    options:prevState.options.filter((option)=>{
        return optionToRemove !== option;
    })
}));

}
   


handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
     handleAddOption(option){
         if(!option){
             return 'enter valid value to add value';
         }else if(this.state.options.indexOf(option)>-1){
             return 'this option already exist';
         }


        //  this.setState((prevState) =>  {
        //      return {
        //      options: prevState.options.concat(option)
        //      }; 
        //  });

         //*1
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
        
    }
    render(){
    
    const subtitle =" put your life in hands of computer";
    
        return (
            <div>
            <Header   subtitle={subtitle}/ >
            <Action 
            hasOptions={this.state.options.length > 0 }
            handlePick={this.handlePick}
            />
            <Options 
             options={this.state.options}
             handleDeleteOptions={this.handleDeleteOptions}
             handleDeleteOptionSingular={this.handleDeleteOptionSingular}
             />
            <AddOption 
            handleAddOption={this.handleAddOption}
            />

            </div>
        );
    }
}

// //defaultProps for IndecisionApp
// IndecisionApp.defaultProps={
//     options: []
// };



//using stateless
const Header=(props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
        {props.subtitle && <h2> {props.subtitle}</h2>}
        </div>
    );
}

//default props
Header.defaultProps={
    title:'Indecision App'
};

// using class component 
// class Header extends React.Component{
//     render(){
// return (
//     <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//     </div>
// );
// }
// }


//using stateless concept 
const Action =(props) =>{
    return (
        
        <div>
        <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        what should i do ?
        </button>
        </div>
    );   
}

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

//using stateless component 
const Options=(props) =>{
    return (
        <div>
        <button 
        onClick={props.handleDeleteOptions}>remove all</button>
        {props.options.length === 0 && <p>please add an option to get started!!</p>}
        {
     props.options.map((option) => (
         <Option 
         key={option} 
         optionText={option} 
         handleDeleteOptionSingular={props.handleDeleteOptionSingular}
         />  
         ))
     }
        </div>
    );
}


//using class component 
// class Options extends React.Component{
  
//     render(){
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>remove all</button>
//             {
//          this.props.options.map((option) => <Option key={option} optionText={option} />  )
//          }
//             </div>
//         );
//     }

// }



//using stateless functional componenet 
const Option=(props) =>{
    return (
        <div>
        {props.optionText}
        <button onClick={(e)=>{
            props.handleDeleteOptionSingular(props.optionText ) }} >
        remove
        </button>
        </div>
    );
}

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



/* form */

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        };
    }
      handleAddOption(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        const error=this.props.handleAddOption(option);

        //implicitly returning object *1
        this.setState(()=> ({ error }));
         // this.setState(()=>{
        //     return{
        //         error
        //     };
        // });
      
        //after on submit , for no text in textbox
    if(!error){
        e.target.elements.option.value='';
    }
    }

    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error   }</p>}
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"></input>
            <button>on submit</button>
            
            </form>
            </div>
        );
    }

}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));