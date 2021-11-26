interface TabsProps {}

const Tabs: React.FunctionComponent<TabsProps> = () => {
    return (
        <div className='tab-list underline-indicators flex'>
            <button
                aria-selected='true'
                role='tab'
                className='uppercase text-accent letter-spacing-2 bg-dark ff-sans-cond'>
                Moon
            </button>
            <button
                aria-selected='false'
                role='tab'
                className='uppercase text-accent letter-spacing-2 bg-dark ff-sans-cond'>
                Mars
            </button>
            <button
                aria-selected='false'
                role='tab'
                className='uppercase text-accent letter-spacing-2 bg-dark ff-sans-cond'>
                Europa
            </button>
        </div>
    );
};

export default Tabs;
