import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
 
const RightSideNav = () => {
  return (
    <div>
      {/* Logine Server */}
      <div>
        <div className="text-center ">
          <div className="p-4 mb-2">
            <div>
              <h2 className="text-2xl text-left mb-6">Login With</h2>
              <button className="btn btn-outline btn-warning w-full">
                <FaGoogle />
                Login with Google
              </button>
            </div>
          </div>
          <div className="p-4 pt-1">
            <button className="btn btn-outline btn-info w-full">
              <FaGithub />
              Login with Github
            </button>
          </div>
        </div>
        <div>
          <div className="p-4   mb-6">
            <h2 className=" p-2 text-left text-2xl">Find Us On</h2>
            <a
              className=" p-3 flex gap-2 text-lg items-center border rounded-t-lg"
              href=""
            >
              <FaFacebook />
              <span>Facebook</span>
            </a>
            <a
              className=" p-3  flex text-lg items-center gap-3 border    "
              href=""
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>
            <a
              className=" p-3 flex text-lg  items-center gap-3 border rounded-b-lg"
              href=""
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="p-4 mb-2">
          <h2 className="text-2xl text-left mb-6">Q-Zone</h2>
          <div className="p-4 border bg-gray-200">
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
