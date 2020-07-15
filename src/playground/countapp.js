
class Componentcounter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state={
            count:0
        };
    }
    handleAddOne(){
        this.setState((prevState) =>{
            return{
                count:prevState.count+1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) =>{
            return{
                count:prevState.count-1
            };
        });
    }
    handleReset(){
        this.setState((prevState) =>{
            return{ 
                count:0
            };
        });
    }

    componentDidMount(){
        const stringcount=localStorage.getItem('count');
        const count=parseInt(stringcount,10);
        if(!isNaN(count)){
            this.setState(()=>({count}));
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count){
            localStorage.setItem('count',this.state.count);

        }

    }


    render(){
        return (
            <div>
            <h1>count: {this.state.count} </h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
        );
    
    }
}

// //default props
// Componentcounter.defaultProps={
//     count:0
// }
//methods +1 -1 reset
ReactDOM.render(<Componentcounter />,document.getElementById('app'));







// let count=0;
// const addone = () => {
//     count++;
//     console.log("addone");
//     counter1app();

// }
// const minusone = () => {
//     count--;
//     console.log("minusone");
//     counter1app();
// }
// const resetbutton = () => {
//     count=0;
//     console.log("reset");
//     counter1app();
// }

// const appRoot=document.getElementById('app');

// const counter1app = () =>{
//     const counter1=(
//         <div>
//         <h1>count:{count} </h1>
//         <button onClick={addone}>+1</button>
//         <br></br>
//         <button onClick={minusone}>-1</button>
//         <br></br>
//         <button onClick={resetbutton}>reset</button>
//         </div>
//         );
//         ReactDOM.render(counter1,appRoot);
// }
// counter1app();