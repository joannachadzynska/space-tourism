interface DotIndicatorProps {
    activeIndex: number;
    count: any;
    onClick: (e: any) => void;
}

const DotIndicator: React.FunctionComponent<DotIndicatorProps> = ({
    count,
    activeIndex,
    onClick,
    children,
    ...props
}) => {
    const renderDots = () => {
        return [...Array(count).keys()].map((index) => (
            <button
                key={index}
                role='tab'
                onClick={() => onClick(index)}
                aria-selected={activeIndex === index}
                style={{
                    backgroundColor: activeIndex === index ? "#fff" : "",
                }}>
                <span className='sr-only'>{children}</span>
            </button>
        ));
    };
    return <div className='dot-indicators flex'>{renderDots()}</div>;
};

export default DotIndicator;
