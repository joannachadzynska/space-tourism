// @ts-check

import React, { useRef } from "react";
import { CustomLink, MobileNavButton } from ".";
import { ROUTES } from "../routing/Routes";
import useClickOutside from "../shared/hooks/useOnClickOutside";

export interface NavigationProps {
    onClickOutside: () => void;
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FunctionComponent<NavigationProps> = ({
    onClickOutside,
    isExpanded,
    setIsExpanded,
}) => {
    const clickRef = useRef() as React.MutableRefObject<HTMLUListElement>;
    useClickOutside(clickRef, onClickOutside);

    return (
        <>
            <MobileNavButton
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
            />
            <nav>
                <ul
                    ref={clickRef}
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
