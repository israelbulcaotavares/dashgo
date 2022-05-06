import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align='center' >
            {showProfileData && (
                <Box mr='4' textAlign='right' >
                <Text>Israel Tavares</Text>
                <Text
                    color='gray.300'
                    fontSize='small'>
                    israelbulcaotavares@gmail.com</Text>
            </Box>
            )}
             
            <Avatar size='md' name='Israel Tavares' src='https://github.com/israelbulcaotavares.png' />

        </Flex>
    );
}