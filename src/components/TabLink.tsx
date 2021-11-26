import { Link, LinkProps } from "react-router-dom";

interface TabLinkProps extends LinkProps {}

const TabLink: React.FunctionComponent<TabLinkProps> = ({
    children,
    to,
    ...props
}) => {
    return (
        <Link
            to={to}
            aria-selected='true'
            role='tab'
            className='uppercase text-accent letter-spacing-2 bg-dark ff-sans-cond'>
            {children}
        </Link>
    );
};

export default TabLink;
