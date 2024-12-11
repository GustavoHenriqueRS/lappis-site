import HorizontalCard from "./horizontalCard";
import Square from "./square";

interface ListSessionComponentProps{
    title: string;
    description: string;
    hoverColor: string;
    cardColors: string;
}

export default async function ListSessionComponent({
    title,
    description,
    hoverColor,
    cardColors,
}: ListSessionComponentProps){
    return (
        <Square>
            <HorizontalCard
            title={title}
            color={cardColors}
            description={description}
            hoverColor={hoverColor}
            />
        </Square>
    )
}