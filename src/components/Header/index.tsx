import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
    return (
        <Flex
            align='center'
            justify='center'
            py='8'
        >
            <Link href='/' passHref>
                <a>
                    <Image src="images/trip-logo.svg" />
                </a>
            </Link>
        </Flex>
    )
}