interface ColorCardProps {
    name: string;
    hex: string;
    rgb: string;
    hsl: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ hex, rgb, hsl, name }) => {
    return (
        <div style={{ flexGrow: 1 }}>
            <div
                className={
                    name === "dark"
                        ? "bg-dark text-white ff-serif fs-500"
                        : name === "light"
                        ? "bg-accent text-dark ff-serif fs-500"
                        : "bg-white text-dark ff-serif fs-500"
                }
                style={{
                    padding: "3rem 1rem 1rem",
                    border: "1px solid white",
                }}>
                {hex}
            </div>
            <p>
                <span className='text-accent'>RGB</span> {rgb}
            </p>
            <p>
                <span className='text-accent'>HSL</span> {hsl}
            </p>
        </div>
    );
};

export default ColorCard;
