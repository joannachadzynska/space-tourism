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
            <h2>{data.name}</h2>
            <p>{data.description}</p>
        </section>
    );
};

export default DestinationPage;
