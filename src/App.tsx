import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout";
import { Crew, Destination, Landing, Technology, Test } from "./pages";

const App = () => (
    <Router>
        <Layout>
            <Routes>
                <Route index element={<Landing />} />
                <Route path='/test' element={<Test />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/crew' element={<Crew />} />
                <Route path='/technology' element={<Technology />} />
            </Routes>
        </Layout>
    </Router>
);
export default App;
