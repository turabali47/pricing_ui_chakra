import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Box textAlign={"center"} bg={"#6B46C1"} pt="90px" pb={"170px"} color="white">
        <Heading fontSize="48px">Simple pricing for your business</Heading>
        <Text mt={"16px"} fontSize="24px">Plans that are carefully crafted to suit your business.</Text>
    </Box>
  )
}
