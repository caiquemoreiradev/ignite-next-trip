import { Flex } from "@chakra-ui/react";
import { TravelItem } from "./TravelItem";

const travelTypes = [
    {
        image: 'cocktail.svg',
        text: 'vida noturna'
    },

    {
        image: 'surf.svg',
        text: 'praia'
    },

    {
        image: 'building.svg',
        text: 'moderno'
    },

    {
        image: 'museum.svg',
        text: 'clássico'
    },

    {
        image: 'earth.svg',
        text: 'e mais...'
    }
]

export function TravelTypes() {
    return (
        <Flex justifyContent='space-evenly'>
            {travelTypes.map(travelType => (
                <TravelItem image={travelType.image} text={travelType.text} />
            ))}
        </Flex>
    )
}