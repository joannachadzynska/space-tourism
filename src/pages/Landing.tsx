import { ExploreButton } from "../components";

const LandingPage: React.FunctionComponent = () => (
    <>
        <div>
            <h1 className='text-accent uppercase fs-500 ff-sans-cond letter-spacing-1'>
                So, you want to travel to
                <span className='fs-900 ff-serif text-white d-block'>
                    Space
                </span>
            </h1>
            <p className='text-accent ff-sans-cond letter-spacing-3'>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
            </p>
        </div>
        <div className='btn--container'>
            <ExploreButton />
        </div>
    </>
);

export default LandingPage;
