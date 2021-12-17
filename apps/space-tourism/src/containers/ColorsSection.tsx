import { ColorCard } from "../components";

interface ColorsSectionProps {}

const colors = [
    {
        name: "dark",
        hex: "#0B0D17",
        rgb: "11, 13, 23",
        hsl: "230°, 35%, 7%",
    },
    {
        name: "light",
        hex: "#D0D6F9",
        rgb: "208, 214, 249",
        hsl: "231°, 77%, 90%",
    },
    {
        name: "white",
        hex: "#FFFFFF",
        rgb: "255, 255, 255",
        hsl: "0°, 0%, 100%",
    },
];

const ColorsSection: React.FC<ColorsSectionProps> = () => {
    return (
        <section id='colors' style={{ margin: "4rem 0" }}>
            <h2 className='numbered-title'>
                <span>01</span> colors
            </h2>
            <div className='flex'>
                {colors.map((color) => (
                    <ColorCard key={color.name} {...color} />
                ))}
            </div>
        </section>
    );
};

export default ColorsSection;
