import { createRef } from "react";
import { DotIndicator } from "../../components";

interface CarouselProps {
    count: number;
}

const Carousel: React.FunctionComponent<CarouselProps> = ({
    count,
    children,
}) => {
    const target = createRef<HTMLDivElement>();
    return (
        <div className='main'>
            <div className='carousel' ref={target}>
                {children}
            </div>

            <DotIndicator count={count} target={target} />
        </div>
    );
};

export default Carousel;
