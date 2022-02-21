import { Flex, Text } from "@chakra-ui/react";

export function ContinentBanner() {
    return (
        <Flex
            bgPosition='center'
            height='450'
            align='flex-end'
            bgImage='https://images.unsplash.com/photo-1589719715846-a4bb6a877120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
        >
            <Flex
                width='100%'
                height='100%'
                align='center'
                justify='center'
                flexDir='column'
                bg="rgba(28, 20, 1, 0.55)"
            >
                <Text fontSize='56' fontWeight='bold' color='gray.100'>Europa</Text>
            </Flex>
        </Flex>
    )
}