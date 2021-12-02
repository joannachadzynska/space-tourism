interface MobileNavButtonProps {
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavButton: React.FunctionComponent<MobileNavButtonProps> = ({
    isExpanded,
    setIsExpanded,
}) => {
    return (
        <button
            className='mobile-nav-toggle'
            aria-controls='primary-navigation'
            aria-expanded={isExpanded ? "true" : "false"}
            onClick={() => setIsExpanded(!isExpanded)}>
            <span className='sr-only'>Menu</span>
        </button>
    );
};

export default MobileNavButton;
