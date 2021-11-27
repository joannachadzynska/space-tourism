import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

const TabLink: React.FunctionComponent<LinkProps> = ({
    children,
    to,
    ...props
}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            to={to}
            aria-selected={match ? "true" : "false"}
            role='tab'
            className='uppercase text-accent letter-spacing-2 bg-dark ff-sans-cond'>
            {children}
        </Link>
    );
};

export default TabLink;
