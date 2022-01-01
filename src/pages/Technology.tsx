import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTechnologies } from "../features/technologySlice";

interface TechnologyPageProps {}

const TechnologyPage: React.FunctionComponent<TechnologyPageProps> = () => {
    const technologies = useSelector(selectTechnologies);
    
    const [activeIndex, setActiveIndex] = useState(0);
    if (technologies.length === 0) return null;

    return (
        <section>
            {" "}
            <h1 className='numbered-title'>
                <span aria-hidden='true'>03</span> Space launch 101
            </h1>
            <img
                src={technologies[activeIndex].images.landscape}
                alt={technologies[activeIndex].name}
            />
            <div
                className='number-indicators flex fs-600'
                style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <button role='tab' aria-selected='true'>
                    <span>1</span>
                </button>
                <button role='tab' aria-selected='false'>
                    <span>2</span>
                </button>
                <button role='tab' aria-selected='false'>
                    <span>3</span>
                </button>
            </div>
            <span className='fs-400 uppercase text-accent ff-sand-condensed letter-spacing-1'>the terminology ...</span>

            {technologies.map((technology, index) => (
                <article>
                    <h2 className='fs-600 ff-serif uppercase'>{technology.name}</h2>
                    <p>{technology.description}</p>
                </article>
            ))}
        </section>
    );
};

export default TechnologyPage;
