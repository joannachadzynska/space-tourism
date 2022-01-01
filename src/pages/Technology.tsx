import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTechnologies } from "../features/technologySlice";
import NumberIndicator from './../components/NumberIndicator';

interface TechnologyPageProps {}

const TechnologyPage: React.FunctionComponent<TechnologyPageProps> = () => {
    const technologies = useSelector(selectTechnologies);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    })

    useEffect(() => {
        function handleResize() {
                setDimensions({
                    height: window.innerHeight,
                    width: window.innerWidth,
                });
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    

    const [activeIndex, setActiveIndex] = useState(0);
    if (technologies.length === 0) return null;
    
    return (
        <>
            <h1 className='numbered-title'>
                <span aria-hidden='true'>03</span> Space launch 101
            </h1>
            <img
                src={dimensions.width > 760 ? technologies[activeIndex].images.portrait: technologies[activeIndex].images.landscape}
                alt={technologies[activeIndex].name}
                className={dimensions.width > 760 ? 'portrait-image' : 'landscape-image'}
            />
            <NumberIndicator
                count={technologies.length}
                activeIndex={activeIndex}
                onClick={(active: number) => setActiveIndex(active)}
            />

            {technologies.map((technology, index) => (
                <article
                    className='technology-details'
                    key={technology.name}
                    style={{
                        display: activeIndex !== index ? "none" : "",
                    }}>
                    <span className='fs-300 uppercase text-accent ff-sand-condensed letter-spacing-3'>
                        the terminology ...
                    </span>
                    <h2 className='fs-700 uppercase ff-serif letter-spacing-1'>
                        {technology.name}
                    </h2>
                    <p className='text-accent'>{technology.description}</p>
                </article>
            ))}
        </>
    );
};

export default TechnologyPage;
