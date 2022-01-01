interface IndicatorProps {
    activeIndex: number;
    count: any;
    onClick: (e: any) => void;
}

const NumberIndicator: React.FunctionComponent<IndicatorProps> = ({
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
                <span>{index + 1}</span>
            </button>
        ));
    };
    return <div className='number-indicators flex fs-600'>{renderDots()}</div>;
};

export default NumberIndicator;
