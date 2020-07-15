var user={
    name:'rishi',
    age:'21',
    location:'lingampally'
    };
    
    function getlocation(){
        return 'hyd';
    }
    const templateTwo=(
        <div>
        <h1>{user.name}</h1>
        <p> age : {user.age}</p>
        <p> location : {getlocation()}</p>
        <p>collage : vmeg</p>
        </div>
    );