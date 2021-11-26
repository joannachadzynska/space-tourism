interface MobileNavButtonProps {
    expanded: boolean;
    onClick: () => void;
}

const MobileNavButton: React.FunctionComponent<MobileNavButtonProps> = ({
    expanded,
    onClick,
}) => {
    return (
        <button
            className='mobile-nav-toggle'
            aria-controls='primary-navigation'
            aria-expanded={expanded ? "true" : "false"}
            onClick={onClick}>
            <span className='sr-only'>Menu</span>
        </button>
    );
};

export default MobileNavButton;
