import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

export function ContinentCities() {
    return (
        <Flex width='100%' align='center' flexDirection='column'>
            <Text mb='16' fontSize='36' fontWeight='medium' color='gray.800'>Cidades mais visitadas</Text>

            <SimpleGrid templateColumns='repeat(3, 1fr)' gap={6}>
                <CityCard city="Paris" country="França" flag="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png" image="https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                
                <CityCard city="Londres" country="Reino Unido" flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/1280px-Flag_of_the_United_Kingdom_%282-3%29.svg.png" image="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />

                <CityCard city="Roma" country="Itália" flag="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png" image="https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" />

                <CityCard city="Praga" country="República Tcheca" flag="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1280px-Flag_of_the_Czech_Republic.svg.png" image="https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />

                <CityCard city="Amsterdã" country="Holanda" flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png" image="https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            </SimpleGrid>
        </Flex>
    )
}