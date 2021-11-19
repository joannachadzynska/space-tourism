/* eslint-disable jsx-a11y/anchor-is-valid */
interface ExploreButtonProps {}

const ExploreButton: React.FC<ExploreButtonProps> = () => {
    return (
        <>
            <a
                href='#'
                className='large-button uppercase ff-serif text-dark bg-white '>
                Explore
            </a>

            {/* <a
                href='#'
                className='large-button uppercase ff-serif text-dark bg-accent fs-600'>
                Explore
            </a> */}
        </>
    );
};

export default ExploreButton;
