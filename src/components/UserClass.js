
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        console.log("Constructor")
        super(props);
        this.state = {
            userInfo: { 
            avatar_url: "https://aknkvnkac.com",
            name : "Default",
            location: "Default Location",
            }
        };
        
    }

    async componentDidMount(){
        
        const data = await  fetch("https://api.github.com/users/imdeepakvermaa");
        const json = await data.json();
        // console.log(json);


        this.setState({
            userInfo: json,

        });
        console.log("Component did mount");
    }


    componentDidUpdate(){
        console.log("Component did update.");
    }

    componentWillUnmount(){
        console.log("component will Unmount");
    }

    render() {
        console.log("render");
        const {name,location,avatar_url} = this.state.userInfo;

        return (
            <div className="mt-8">
                <div className="text-center">
                    <h1 className="font-bold underline text-2xl text-orange-500 pb-2 ">About Me</h1>
                    <img className="ml-[410px] w-[180px] border-solid border-2 border-orange-400" src= {avatar_url} alt="" />
                    <h2 className="font-bold text-lg">Name = {name}</h2>
                    <h3 className="font-bold text-lg">location = {location}</h3>
                    {/* <button onClick={() => {
                        this.setState(
                            {
                                count: this.state.count + 1,
                            }
                        );
                    }}>
                        Click me to increase count
                    </button> */}
                </div>
            </div>
        );
    }
}

export default UserClass;