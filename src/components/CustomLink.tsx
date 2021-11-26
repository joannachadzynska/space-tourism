import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink: React.FunctionComponent<LinkProps> = ({
    children,
    to,
    state,
    ...props
}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <li className={match ? "active" : ""}>
            <Link className='uppercase text-white letter-spacing-2' to={to}>
                <span aria-hidden='true'>{state}</span>
                {children}
            </Link>
        </li>
    );
};

export default CustomLink;
