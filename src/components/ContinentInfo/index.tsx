import { Flex, Text } from "@chakra-ui/react";
import { ContinentItem } from "../ContinentItem";

export function ContinentInfo() {
    return (
        <Flex align='center' justifyContent='space-evenly' px='24' py='24'>
            <Text color='gray.700' fontSize='22' maxWidth='600'>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>

            <Flex>
                <ContinentItem number={50} title='países' />
                <ContinentItem number={60} title='línguas' />
                <ContinentItem number={27} title='cidades' />
            </Flex>
        </Flex>
    )
}