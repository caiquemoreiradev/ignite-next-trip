import { Flex, Text } from "@chakra-ui/react";
import { Slide } from "./Slide";

export function ContinentSlider() {
    return (
        <Flex fontSize='36' fontWeight='medium' color='gray.600' py='16' flexDir='column'>
            <Text textAlign='center'>Vamos nessa? <br /> Então escolha seu continente</Text>

            <Slide />
        </Flex>
    )
}