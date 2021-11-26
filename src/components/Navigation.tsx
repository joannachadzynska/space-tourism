import { useState } from "react";
import { CustomLink, MobileNavButton } from ".";
import { ROUTES } from "../routing/Routes";

const Navigation: React.FunctionComponent = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <>
            <MobileNavButton
                expanded={isExpanded}
                onClick={() => setIsExpanded(!isExpanded)}
            />
            <nav>
                <ul
                    id='primary-navigation'
                    className='primary-navigation underline-indicators ff-sans-cond flex'
                    data-visible={isExpanded}>
                    <CustomLink to={ROUTES.HOME} state='00'>
                        Home
                    </CustomLink>
                    <CustomLink to={ROUTES.DESTINATION} state='01'>
                        Destination
                    </CustomLink>
                    <CustomLink to={ROUTES.CREW} state='02'>
                        Crew
                    </CustomLink>
                    <CustomLink to={ROUTES.TECHNOLOGY} state='03'>
                        Technology
                    </CustomLink>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;
