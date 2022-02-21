import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelItemProps {
    image: string;
    text: string;
}

export function TravelItem({ image, text }: TravelItemProps) {
    return (
        <Flex py='4' flexDir='column' align='center'>
            <Image mb='4' src={`/images/${image}`} />
            <Text color='gray.700' fontWeight='bold'>{text}</Text>
        </Flex>
    )
}