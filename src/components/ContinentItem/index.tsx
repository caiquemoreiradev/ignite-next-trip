import { Flex, Text } from "@chakra-ui/react";

interface ContinentItemProps {
    number: number;
    title: string;
}

export function ContinentItem({ number, title }: ContinentItemProps) {
    return (
        <Flex px='8' flexDirection='column' align='center'>
            <Text fontSize='48' fontWeight='bold' color='green.500'>{number}</Text>

            <Text fontSize='24'>{title}</Text>
        </Flex>
    )
}