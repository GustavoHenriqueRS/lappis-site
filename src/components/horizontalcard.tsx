import Image from "next/image";

interface HorizontalCardProps{
    color: string | undefined;
    text: string;
    description: string;
    img: string
}

export default function HorizontalCard({
    color,
    text,
    description,
    img
}:HorizontalCardProps){
    return(
        <div className={`${color} w-4/5 h-64 rounded-xl p-6 gap-6 text-white`}>
            <img src={img} alt="imagem do card"></img>
            <div className="text-white">
                <h2>
                    {text}
                </h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )

}