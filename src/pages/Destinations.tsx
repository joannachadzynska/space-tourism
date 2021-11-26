import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { TabLink } from "../components";
import { selectDestinations } from "./../features/destination/destinationSlice";

const Destinations: React.FunctionComponent = () => {
    const destinations = useSelector(selectDestinations);

    return (
        <>
            <h1 className='numbered-title'>
                <span aria-hidden='true'>01</span> Pick your destination
            </h1>
            <div className='tab-list underline-indicators flex'>
                {destinations.map((destination, index) => (
                    <TabLink key={destination.name} to={destination.path}>
                        {destination.name}
                    </TabLink>
                ))}
            </div>
            <Outlet />
        </>
    );
};

export default Destinations;
