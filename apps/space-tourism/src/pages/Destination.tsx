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
        <article className='destination-info'>
            <h2 className='ff-serif uppercase fs-800'>{data.name}</h2>

            <p className='text-accent fs-300'>{data.description}</p>

            <div className='destination-meta flex '>
                <div className='details'>
                    <h3 className='fs-400 uppercase text-accent ff-sans-cond letter-spacing-2'>
                        AVG. Distance
                    </h3>
                    <p className='uppercase ff-serif '>{data.distance}</p>
                </div>
                <div className='details'>
                    <h3 className='fs-400 uppercase text-accent ff-sans-cond letter-spacing-2'>
                        est. travel time
                    </h3>
                    <p className='uppercase ff-serif '>{data.travel}</p>
                </div>
            </div>
        </article>
    );
};

export default DestinationPage;
