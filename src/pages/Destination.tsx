import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectDestination } from "../features/destination/destinationSlice";
import { Destination } from "../models/destination.model";

const DestinationPage: React.FunctionComponent = () => {
    const { destination: path } = useParams();
    const [data, setData] = useState<Destination>({} as Destination);
    const dest = useSelector(selectDestination(path));

    useEffect(() => {
        dest && setData(dest);
        return () => {};
    }, [dest]);

    return (
        <section>
            <h2 className='ff-serif uppercase fs-900'>{data.name}</h2>
            <p className='text-accent fs-300'>{data.description}</p>

            <div className='details'>
                <p className='uppercase text-accent ff-sans-cond letter-spacing-2'>
                    AVG. Distance
                </p>
                <h3 className='uppercase ff-serif fs-500'>{data.distance}</h3>
            </div>
            <div className='details'>
                <p className='uppercase text-accent ff-sans-cond letter-spacing-2'>
                    est. travel time
                </p>
                <h3 className='uppercase ff-serif fs-500'>{data.travel}</h3>
            </div>
        </section>
    );
};

export default DestinationPage;
