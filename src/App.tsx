import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppDispatch } from "./app/hooks";
import { Header, Layout } from "./containers";
import destinations from "./data/destinations.json";
import { getDestinations } from "./features/destination/destinationSlice";
import {
    Crew,
    Destination,
    Destinations,
    Landing,
    Technology,
    Test,
} from "./pages";

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getDestinations(destinations));
        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Router>
            <a href='#main' className='skip-to-content'>
                Skip to main content
            </a>
            <Header />
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path='test' element={<Test />} />
                    <Route path='destinations' element={<Destinations />}>
                        <Route path=':destination' element={<Destination />} />
                    </Route>
                    <Route path='crew' element={<Crew />} />
                    <Route path='technology' element={<Technology />} />
                </Route>
            </Routes>
        </Router>
    );
};
export default App;
