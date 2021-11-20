import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { ROUTES } from "../routing/Routes";

const Header: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <header className='primary-header flex'>
            <div>
                <img src={logo} alt='space tourism logo' className='logo' />
            </div>
            <button
                className='mobile-nav-toggle'
                aria-controls='primary-navigation'
                aria-expanded={isExpanded ? "true" : "false"}
                onClick={() => setIsExpanded(!isExpanded)}>
                <span className='sr-only'>Menu</span>
            </button>
            <nav>
                <ul
                    id='primary-navigation'
                    className='primary-navigation underline-indicators ff-sans-cond flex'
                    data-visible={isExpanded}>
                    <li className='active'>
                        <Link
                            className='uppercase text-white letter-spacing-2'
                            to={ROUTES.home}>
                            <span aria-hidden='true'>00</span>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='uppercase text-white letter-spacing-2'
                            to={ROUTES.destination}>
                            <span aria-hidden='true'>01</span>
                            Destination
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='uppercase text-white letter-spacing-2'
                            to={ROUTES.crew}>
                            <span aria-hidden='true'>02</span>
                            Crew
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='uppercase text-white letter-spacing-2'
                            to={ROUTES.technology}>
                            <span aria-hidden='true'>02</span>
                            Technology
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
