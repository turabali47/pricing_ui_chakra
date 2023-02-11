import Icon from '@chakra-ui/icon/dist/icon'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import Icon1 from './Icon1'
import Icon2 from './Icon2'
import Icon3 from './Icon3'

export default function Footer() {
  return (
    <Box mt={"65px"} maxWidth="900px" px={"20px"} mx={{base:"25px",lg:"auto"}}>
      <Flex direction={{base:"column", md:"row", lg:"row"}}>
        <HStack mb={"20px"} px={"20px"}>
          <Icon1/>
          <Box fontSize={"18px"} fontWeight="bold" px={"10px"}>
            <Text>30 days money back Guarantee</Text>
          </Box>
        </HStack>

        <HStack mb={"20px"} px={"20px"}>
          <Icon2/>
          <Box fontSize={"18px"} fontWeight="bold" px={"10px"}>
            <Text>No setup fees 100% hassle-free</Text>
          </Box>
        </HStack>

        <HStack mb={"20px"} px={"20px"}>
          <Icon3/>
          <Box fontSize={"18px"} fontWeight="bold" px={"10px"}>
            <Text>No monthly subscription Pay once and for all</Text>
          </Box>
        </HStack>
      </Flex>
    </Box>
  )
}
