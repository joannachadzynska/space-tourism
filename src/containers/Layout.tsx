import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

const Layout: React.FunctionComponent = ({ children }) => {
    const location = useLocation();
    const name = location.pathname.split("/")[1];

    useEffect(() => {
        document.body.classList.add(
            location.pathname === "/" ? "home" : `${name}`
        );
        return () => {
            document.body.classList.remove(
                location.pathname === "/" ? "home" : `${name}`
            );
        };
    }, [location.pathname, name]);

    return (
        <main
            id='main'
            className={`grid-container-xxx grid-container--${
                location.pathname === "/" ? "home" : `${name}`
            }`}>
            <Outlet />
        </main>
    );
};

export default Layout;
