import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SlideItemProps {
    image: string;
    title: string;
    description: string;
}

export function SlideItem({ image, title, description }: SlideItemProps) {
    return (
        <Link href={`/continent`} passHref>
            <a>
                <Flex
                    width='100%'
                    height='100%'
                    bgImage={image}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                >
                    <Flex
                        width='100%'
                        height='100%'
                        align='center'
                        justify='center'
                        flexDir='column'
                        bg="rgba(28, 20, 1, 0.55)"
                    >
                        <Text color='gray.100' fontSize='48'>{title}</Text>

                        <Text color='gray.50' fontSize='24'>{description}</Text>
                    </Flex>
                </Flex>
            </a>
        </Link>
    )
}