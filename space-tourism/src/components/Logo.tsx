import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

const Logo: React.FunctionComponent = () => (
    <NavLink to='/'>
        <img src={logo} alt='space tourism logo' className='logo' />
    </NavLink>
);

export default Logo;
