import Header from "./Shared/Header";
import Navbar from "./Shared/Navbar";
import LeftSideNave from "./Shared/SideNav/LeftSideNave";
import RightSideNav from "./Shared/SideNav/RightSideNav";

 

 
const Home = () => {
    return (
        <div>
           <Header/>
           <Navbar/>
             <div className=" pt-6 grid sm:grid-cols-1 md:grid-cols-4 gap-6">
                 <div className=" border">
                    <LeftSideNave/>
                 </div>
                 <div className="md:col-span-2 border">
                    <h2 className=" text-4xl">News comming soon...</h2>
                 </div>
                 <div className="border"><RightSideNav/></div>
             </div>
            
        </div>
    );
};

export default Home;