/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ExploreButton } from "../components";

interface InteractiveElementsProps {}

const InteractiveElements: React.FC<InteractiveElementsProps> = () => {
    return (
        <section className='flow' id='typography' style={{ margin: "4rem 0" }}>
            <h2 className='numbered-title'>
                <span>03 </span>Interactive elements
            </h2>

            {/* navigation */}
            <div>
                <nav>
                    <ul className='primary-navigation underline-indicators ff-sans-cond flex'>
                        <li className='active'>
                            <a
                                className='uppercase text-white letter-spacing-2'
                                href='#'>
                                <span>00</span>
                                Active
                            </a>
                        </li>
                        <li>
                            <a
                                className='uppercase text-white letter-spacing-2'
                                href='#'>
                                <span>01</span>
                                Hovered
                            </a>
                        </li>
                        <li>
                            <a
                                className='uppercase text-white letter-spacing-2'
                                href='#'>
                                <span>02</span>
                                Idle
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className='flex'>
                <div style={{ marginTop: "5rem" }} className='flow'>
                    {/* explore button */}
                    <ExploreButton />
                    <p>Landing Page Main Button</p>
                </div>

                <div className='flow' style={{ marginBottom: "50vh" }}>
                    {/* tabs */}
                    {/* dots */}
                    {/* numbers */}
                </div>
            </div>
        </section>
    );
};

export default InteractiveElements;
