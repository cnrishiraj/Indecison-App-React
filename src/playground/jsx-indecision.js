console.log("app.js is running !!");

//object  for app
const template={
   title:'Indecisive app',
   subtitile:'This is the subtitle',
   options:[]
};
//jsx exprssions javascript expression xml 
 
const onformsubmit = (e) =>{
    e.preventDefault();
    const option=e.target.elements.option.value;
    if(option){
        template.options.push(option);
        e.target.elements.option.value='';
        templaterender();
    }
 };
 const resetdata = (e) =>{
    template.options=[];
     templaterender();
 }

 const onMakeDecision =() =>{
   const randomNum = Math.floor(Math.random() * template.options.length);
   const option = template.options[randomNum];
   alert(option);
 }

 const appRoot=document.getElementById('app');



 const templaterender = () =>{
    const template1=(
        <div>
            <h1>{template.title}</h1>
            {template.subtitile && <p>{template.subtitile}</p>}
            <p>{template.options.length > 0 ? 'here are your options' : 'no options'}</p>
            <button disabled={ template.options.length === 0} onClick={onMakeDecision}>what should i do ?</button>
            <button onClick={resetdata}>remove all</button>
            <ol>
            {  //array of jsx inside of jsx
               template.options.map((option) =>{
                    return <li key={option}>{option}</li>
                })
            }
            </ol>
            <form onSubmit={onformsubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
            </form>
        </div>
        );
        ReactDOM.render(template1,appRoot);
}
templaterender();
