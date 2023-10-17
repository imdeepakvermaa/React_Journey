import { useState } from "react" ;

const User = (props) => {
    const [count] = useState(0);
    return (
        <div className="width">
            <div className="aboutcardcontent">
                
                <h1>Hey I am Functional component.</h1>
                <h2>Name = {props.Name}</h2>
                <h3>count ={count}</h3>
            </div>
        </div>
    );
};

export default User;