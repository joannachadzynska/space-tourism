import { useState } from "react";
import { useSelector } from "react-redux";
import { DotIndicator } from "../components";
import { selectCrew } from "../features/crewSlice";

interface CrewPageProps {}

const CrewPage: React.FunctionComponent<CrewPageProps> = () => {
    const members = useSelector(selectCrew);

    const [activeIndex, setActiveIndex] = useState(0);

    if (members.length === 0) return null;
    return (
        <>
            <h1 className='numbered-title'>
                <span aria-hidden='true'>02</span> Meet your crew
            </h1>

            <DotIndicator
                count={members.length}
                activeIndex={activeIndex}
                onClick={(active: number) => setActiveIndex(active)}
            />

            {members.map((member, index) => (
                <article
                    className='crew-details'
                    key={index}
                    style={{
                        display: activeIndex !== index ? "none" : "",
                    }}>
                    <h2 className='crew-role fs-600 ff-serif uppercase'>
                        {member.role}
                    </h2>
                    <p className='fs-700 uppercase ff-serif'>{member.name}</p>
                    <p>{member.bio}</p>
                </article>
            ))}

            <img
                src={members[activeIndex].images.png}
                alt={members[activeIndex].name}
            />
        </>
    );
};

export default CrewPage;
