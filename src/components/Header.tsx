import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { ROUTES } from "../routing/Routes";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className='primary-header flex'>
            <div>
                <img src={logo} alt='space tourism logo' className='logo' />
            </div>

            <nav>
                <ul className='primary-navigation underline-indicators ff-sans-cond flex'>
                    <li className='active'>
                        <Link
                            className='uppercase text-white letter-spacing-2'
                            to={ROUTES.home}>
                            <span>00</span>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='uppercase text-white letter-spacing-2'
                            to={ROUTES.destination}>
                            <span>01</span>
                            Destination
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='uppercase text-white letter-spacing-2'
                            to={ROUTES.crew}>
                            <span>02</span>
                            Crew
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='uppercase text-white letter-spacing-2'
                            to={ROUTES.technology}>
                            <span>02</span>
                            Technology
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
