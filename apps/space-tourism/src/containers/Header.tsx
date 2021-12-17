import { useState } from "react";
import { Logo, Navigation } from "../components";

const Header: React.FunctionComponent = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const clickOutside = () => {
        if (isExpanded) {
            setIsExpanded(false);
        }
    };

    return (
        <header className='primary-header flex'>
            <Logo />
            <Navigation
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                onClickOutside={clickOutside}
            />
        </header>
    );
};

export default Header;
