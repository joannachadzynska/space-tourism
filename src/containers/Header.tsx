import { Logo, Navigation } from "../components";

const Header: React.FunctionComponent = () => (
    <header className='primary-header flex'>
        <Logo />
        <Navigation />
    </header>
);

export default Header;
