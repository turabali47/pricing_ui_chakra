import { Box, Button, Flex, Heading, HStack, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import Tickmark from './Tickmark'

export default function Pricing() {
  return (
    <Box 
        width={"950px"} 
        mx="auto" 
        mt={"-150px"} 
        borderRadius="12px" 
        overflow={"hidden"}
        boxShadow= "dark-lg">
        <Flex>
            <Box textAlign={"center"} px="50px" py={"50px"} bg="#dfdff0">
                <Text fontSize={"24px"} fontWeight="bold">Premium PRO</Text>
                <Heading fontSize={"60px"} fontWeight="bold">$329</Heading>
                <Text fontSize={"18px"}>billed just once</Text>
                <Button width={"250px"} color={"white"} bg={"#805AD5"} fontSize={"16px"} mt="20px">Get Started</Button>
            </Box>
            <Box bg={"white"} px="40px" py="45px">
                <Text mb={"15px"}>Access these features when you get this pricing package for your business.</Text>
                <HStack mb={"15px"}>
                    <Tickmark/>
                    <Text>International calling and messaging API</Text>
                </HStack>

                <HStack mb={"15px"}>
                    <Tickmark/>
                    <Text mb={"15px"}>Additional phone numbers</Text>
                </HStack>

                <HStack mb={"15px"}>
                    <Tickmark/>
                    <Text mb={"15px"}>Automated messages via Zapier</Text>
                </HStack>

                <HStack>
                    <Tickmark/>
                    <Text>24/7 support and consulting</Text>
                </HStack>
            </Box>
        </Flex>
    </Box>
  )
  }
