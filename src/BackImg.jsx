import { Link } from "react-router-dom";

const BackgroundWithText = () => {
    // const backgroundStyle = {
    //   backgroundImage: "url('/public/images/second.png')",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   height: "100vh",
    //   display: "flex",
    // //   alignItems: "center",
    //   justifyContent: "center",
    //   color: "white",
    //   textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
       
    // };
  
    return (
      <div className="flex flex-col lg:flex-row justify-center items-center" >

        <div className=" lg:h-screen  h-20 flex justify-center flex-col lg:flex-row "><img  src="/images/second.png" alt="" />
        
       <div className="items-center">
       <h1 className="text-6xl mt-40 text-center">Music <span className="bg-gradient-to-r to-purple-500
 bg-clip-text text-transparent from-red-300 text-center">For Everyone</span></h1>
        <p className="text-xl mt-5 font-thin text-neutral-400 text-center "> Turn your Music into Something ExtracOrdinary</p>

        <Link to="/home"><button className="px-5 py-4 mx-auto border mt-10 ml-20 mx-auto">Start Listening</button></Link>
       </div>

        
        
        </div>

        
       
      </div>
    );
  };
  
  export default BackgroundWithText;
  