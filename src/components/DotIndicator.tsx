import { useEffect, useState } from "react";

interface DotIndicatorProps {
    selected?: boolean;
    title?: string;
    count: any;
    target: any;
    onClick?: (e: any) => void;
}

const DotIndicator: React.FunctionComponent<DotIndicatorProps> = ({
    selected,
    title,
    count,
    target,
    onClick,
    ...props
}) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const scrollListener = () => {
        if (!target.current) {
            return;
        }

        const element = target.current;
        const windowScroll = element.scrollLeft; // Distance of the scrollbar from the leftmost point
        const totalWidth = element.scrollWidth - element.clientWidth; // Total width the scrollbar can traverse
        if (windowScroll === 0) {
            return setScrollProgress(0);
        }

        if (windowScroll > totalWidth) {
            return setScrollProgress(100);
        }

        setScrollProgress((windowScroll / totalWidth) * 100);
    };

    useEffect(() => {
        target.current.addEventListener("touchmove", scrollListener);
        return () =>
            target.current &&
            target.current.removeEventListener("touchmove", scrollListener);
    });

    const renderDots = () => {
        const selectedDotValue = (scrollProgress * count) / 100;
        return [...Array(count).keys()].map((index) => (
            <button
                key={index}
                role='tab'
                aria-selected={
                    selectedDotValue >= index && selectedDotValue <= index + 1
                }>
                <span className='sr-only'>{title}</span>
            </button>
        ));
    };
    return <div className='dot-indicators flex'>{renderDots()}</div>;
};

export default DotIndicator;
