import { useEffect } from "react";
import { useLocation } from "react-router";
import { Header } from "../components";

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
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;
