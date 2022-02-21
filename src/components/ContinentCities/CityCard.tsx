import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CityCardProps {
    image: string;
    city: string;
    country: string;
    flag: string;
}

export function CityCard({ image, city, country, flag}: CityCardProps) {
    return (
        <Flex
            backgroundColor='white'
            borderRadius='8'
            m='8'
            width='250px'
            height='280px'
            border='1px'
            borderColor='green.100'
            align='center'
            flexDirection='column'
        >
            <Box>
                <Image
                    src={image} />
            </Box>

            <Flex px='8' py='8' width='100%' alignItems='center' justify='space-between'>
                <Box>
                    <Text fontSize='20' color='gray.800' fontWeight='bold'>{city}</Text>
                    <Text>{country}</Text>
                </Box>

                <Image height='30px' width='30px' borderRadius='15px' src={flag} />
            </Flex>
        </Flex>
    )
}