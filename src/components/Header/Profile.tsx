import { Avatar, Box, Flex,Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align='center' >
       
            <Box mr='4' textAlign='right' >
                <Text>Israel Tavares</Text>
                <Text
                    color='gray.300'
                    fontSize='small'>
                    israelbulcaotavares@gmail.com</Text>
            </Box>

            <Avatar size='md' name='Israel Tavares' src='https://github.com/israelbulcaotavares.png' />

        </Flex>
    );
}