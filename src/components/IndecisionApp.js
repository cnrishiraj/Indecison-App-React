import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component{

    state={
        options:[],
        selectedOption:undefined
    };


    //old syntax
    // constructor(props){
    //     super(props);
    //     this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    //     this.handlePick=this.handlePick.bind(this);
    //     this.handleAddOption=this.handleAddOption.bind(this);
    //     this.handleDeleteOptionSingular=this.handleDeleteOptionSingular.bind(this);
    //     this.state={
    //         options:[]
    //     };
    // }

    //new syntax with arrow functions for all 4 event handlers 
    //using transform classs properties

    handleDeleteOptions =() =>{
        this.setState(()=>({options:[]}));
    };

//delete a option using setState
    handleDeleteOptionSingular = (optionToRemove) =>{
    this.setState((prevState)=>({
    options:prevState.options.filter((option)=>{
        return optionToRemove !== option;
    })
}));
};

    handelDeleteSelectedOption = () => { this.setState(() => ({
            selectedOption: undefined
        }));
        
    };
   
    handlePick =() =>{
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(( )=>({
            selectedOption: option
         }));
    };

     handleAddOption = (option) =>{
         if(!option){
             return 'enter valid value to add value';
         }else if(this.state.options.indexOf(option)>-1){
             return 'this option already exist';
         }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
        
    };


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

 
    render(){
    
    const subtitle =" put your life in hands of computer";
    
        return (
            <div>
            <Header   subtitle={subtitle}/ >
            <div className="container">

            <Action 
            hasOptions={this.state.options.length > 0 }
            handlePick={this.handlePick}
            />
            <div className="widget">

            <Options 
             options={this.state.options}
             handleDeleteOptions={this.handleDeleteOptions}
             handleDeleteOptionSingular={this.handleDeleteOptionSingular}
             />
            <AddOption 
            handleAddOption={this.handleAddOption}
            />
            
            </div>
            

            </div>
            
            <OptionModal
            selectedOption={this.state.selectedOption}
            handelDeleteSelectedOption={this.handelDeleteSelectedOption}
            />
            </div>
        );
    }
}

