import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCrew } from "../features/crewSlice";
import Carousel from "../shared/components/Carousel";

interface CrewPageProps {}

const CrewPage: React.FunctionComponent<CrewPageProps> = () => {
    const members = useSelector(selectCrew);
    const [currentMember, setCurrentMember] = useState("");

    const handleClick = (name: string) => {
        setCurrentMember(name);
    };

    return (
        <>
            <h1 className='numbered-title'>
                <span aria-hidden='true'>02</span> Meet your crew
            </h1>

            <Carousel count={members.length}>
                {" "}
                {members.map((member, index) => (
                    <div key={member.name}>
                        <article className='crew-details' key={index}>
                            <h2 className='crew-role fs-600 ff-serif uppercase'>
                                {member.role}
                            </h2>
                            <p className='fs-700 uppercase ff-serif'>
                                {member.name}
                            </p>
                            <p>{member.bio}</p>
                        </article>

                        <img src={member.images.png} alt={member.name} />
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default CrewPage;
