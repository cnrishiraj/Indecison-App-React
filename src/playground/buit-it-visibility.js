
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
        this.state={
            visibility:false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility:!prevState.visibility

            };
            });
    }
    render(){
        return (
        <div>
        <h1>toggle visibility</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'hide details ': 'show details'}</button>
        { this.state.visibility && (
            <div>
            <p>this is some data</p>
            </div>
        )
    }
        </div>
    
        );
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));



// let visibility=false;
// const change =() =>{

//     visibility=!visibility
//     buint();
// }

// const buint = () => {
//     const sample = (
//         <div>
//         <h1>visibility toggle</h1>
//     <button onClick={change}>{visibility ? 'hide details' : 'show details'}</button>
    
//        { visibility && (
//             <div>
//             <p>this is some text data</p>
//             </div>
//        )}

//     </div>
    
//     );
//     ReactDOM.render(sample ,appRoot);
// }
// const appRoot=document.getElementById('app');
// buint();