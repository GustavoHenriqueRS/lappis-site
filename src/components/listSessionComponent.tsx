"use client";

import HorizontalCard from "./horizontalCard";
import Square from "./square";
import Image from "next/image";
import { useState } from "react";
import fototeste from "../app/public/foto-teste.png";

interface HorizontalCard{
    color: string
    title: string
    description: string
    url_image: string
}

interface ListSession{
    horizontalCards: HorizontalCard[];
    title: string;
    description: string;
    hoverColor: string;
    horizontalCardColors: string;
}

interface ListSessionComponentProps{
    listSession: ListSession;
}

export default function ListSessionComponent({listSession}: ListSessionComponentProps){

    const horizontalCards: HorizontalCard[] = listSession.horizontalCards ? Object.values(listSession.horizontalCards) : [];
    const [startIndex, setStartIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(0);

    const horizontalCardsToShow = 3;
    const maxIndex = horizontalCards.length - horizontalCardsToShow;

    return (
        <Square>
            <HorizontalCard color={listSession.horizontalCardColors} title={listSession.title} description={listSession.description} img={fototeste} />
        </Square>
    )
}
