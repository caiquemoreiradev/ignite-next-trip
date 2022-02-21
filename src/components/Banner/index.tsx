import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex 
        bgImage='/images/background.svg' 
        bgRepeat='no-repeat' 
        p='16' 
        align='flex-start'
        justify='space-evenly'>
            <Box>
                <Text fontWeight='medium' color='gray.100' mb='5' fontSize='36'>5 Continentes, <br /> infinitas possibilidades.</Text>

                <Text fontSize='20'>Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou. </Text>
            </Box>

            <Image src="/images/airplane.svg" />
        </Flex>
    )
}