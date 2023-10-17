import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return(
        <div className="bg-gray-100 py-16">
            <div className=" bg-orange-200 w-[1000px] h-screen shadow-xl  ml-[300px] mr-[40px] rounded-xl">
                <div className="text-center mt-4">
                    <h1 className="font-bold underline text-2xl text-orange-500 pt-4 pb-1">About JustEat</h1>
                    <h3 className="font-bold text-lg">Welcome to JustEat, your go-to destination for a delightful food ordering experience.</h3>
                </div>
                <div className="text-center mt-4">
                    <h1 className="font-bold underline text-2xl text-orange-500 pb-1 ">My Mission</h1>
                    <h3 className="font-bold text-lg">At JustEat, My mission is simple: to bring you the flavors of your favorite restaurants right to your doorstep. I believe that good food has the power to bring people together and create memorable moments, and I'm here to make that happen for you.</h3>
                </div>
                <div className="text-center mt-4">
                    <h1 className="font-bold underline text-2xl text-orange-500 pb-1 ">Get in Touch</h1>
                    <h3 className="font-bold text-lg">I'd love to hear from you! If you have any questions, feedback, or suggestions, please don't hesitate to reach out to us. 
                    Thank you for choosing JustEat. We look forward to serving you with delicious meals and exceptional service!
                    </h3>
                </div>
                <div className="aboutcardcontent">
                    <UserClass />
                </div>
            </div>
        </div>
    );
};


export default About;