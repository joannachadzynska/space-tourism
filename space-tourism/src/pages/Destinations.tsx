import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router";
import { TabLink } from "../components";
import { selectDestinations } from "../features/destination/destinationSlice";

const Destinations: React.FunctionComponent = () => {
    const destinations = useSelector(selectDestinations);
    const location = useLocation();
    const name = location.pathname.split("/")[2];

    return (
        <>
            <h1 className='numbered-title'>
                <span aria-hidden='true'>01</span> Pick your destination
            </h1>

            <img
                src={
                    name
                        ? `${process.env.PUBLIC_URL}/assets/destination/image-${name}.png`
                        : `${process.env.PUBLIC_URL}/assets/destination/image-neptune.png`
                }
                alt={name ? `the ${name}` : "the neptune"}></img>

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
