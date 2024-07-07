import { Outlet } from "react-router-dom";

 
const MainRoute = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins">
            <Outlet/>
        </div>
    );
};

export default MainRoute;