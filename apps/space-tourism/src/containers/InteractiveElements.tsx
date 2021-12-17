/* eslint-disable jsx-a11y/role-supports-aria-props */
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
                <div style={{ marginTop: "5rem" }}>
                    {/* explore button */}
                    <ExploreButton />
                    <p>Landing Page Main Button</p>
                </div>

                <div style={{ marginBottom: "50vh" }} className='flow'>
                    {/* tabs */}
                    <div className='tab-list underline-indicators flex'>
                        <button
                            aria-selected='true'
                            className='uppercase text-accent letter-spacing-2 bg-dark ff-sans-cond'>
                            Moon
                        </button>
                        <button
                            aria-selected='false'
                            className='uppercase text-accent letter-spacing-2 bg-dark ff-sans-cond'>
                            Mars
                        </button>
                        <button
                            aria-selected='false'
                            className='uppercase text-accent letter-spacing-2 bg-dark ff-sans-cond'>
                            Europa
                        </button>
                    </div>

                    {/* dots */}
                    <div className='dot-indicators flex'>
                        <button aria-selected='true'>
                            <span className='sr-only'>Slide title</span>
                        </button>
                        <button aria-selected='false'>
                            <span className='sr-only'>Slide title</span>
                        </button>
                        <button aria-selected='false'>
                            <span className='sr-only'>Slide title</span>
                        </button>
                    </div>

                    {/* numbers */}

                    <div
                        className='number-indicators flex fs-600'
                        style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <button aria-selected='true'>
                            <span>1</span>
                        </button>
                        <button aria-selected='false'>
                            <span>2</span>
                        </button>
                        <button aria-selected='false'>
                            <span>3</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveElements;
