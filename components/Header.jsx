import { 
  Box,
  Flex,
  Spacer,
  HStack,
  Heading,
  Spacing
} from '@chakra-ui/react'

export default function Header() {
  return (
  <Box bg='gray.200' w='100%' p={1} color='Black' pos='fixed'>
    <Flex>
      <HStack spacing={10}> 
        <Box mr=''>
          <Heading size='md'>My Portfolio</Heading>
        </Box>
        <HStack Spacing='20px'>
          <Box p='3' bg='green.400'>
          Box 2
          </Box>
          <Box p='3' bg='green.400'>
          Box 2
          </Box>
        </HStack>
      </HStack>
    </Flex>
</Box>
  )
}
