import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="h-full cursor-pointer z-30">
      <Link to="/">
        <img className="h-[80%] min-w-[80px] mt-[10%]" src={logo} />
      </Link>
    </div>
  );
};

export default Logo;
