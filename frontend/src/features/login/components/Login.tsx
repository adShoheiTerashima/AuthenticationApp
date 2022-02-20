import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Facebook, Github, Google, Lock, Logo, Mail, Twitter } from '@components/icons'
import { css } from '@emotion/react'
const input = css({
  paddingLeft: '2.5rem',
})
export const Login = () => {
  return (
    <Flex h="100vh" justify="center" w={472} m="auto" flexDirection="column" letterSpacing="-3.5%">
      <Box borderWidth="1px" borderRadius="2xl" py="12" px="14" color="black.333">
        <Logo width="131px" height="19px" className="fill-white" />
        <Text mt={6} fontWeight="bold" w={312} fontSize="lg">
          Join thousands of learners from around the world
        </Text>
        <Text mt={3.5}>
          Master web development by making real-life projects. There are multiple paths for you to choose
        </Text>
        <InputGroup mt={9} borderColor="gray.BDBDBD">
          <InputLeftElement pointerEvents="none">
            <Mail width="20px" height="20px" color="gray.828282" />
          </InputLeftElement>
          <Input type="tel" placeholder="Email" css={input} _placeholder={{ color: 'gray.828282' }} />
        </InputGroup>
        <InputGroup mt={3.5} borderColor="gray.BDBDBD">
          <InputLeftElement pointerEvents="none">
            <Lock width="20px" height="20px" color="gray.828282" />
          </InputLeftElement>
          <Input type="tel" placeholder="Password" css={input} _placeholder={{ color: 'gray.828282' }} />
        </InputGroup>
        <Button backgroundColor="blue.2F80ED" mt={6} color="white" w="100%" borderRadius="lg">
          Start coding now
        </Button>
        <Center>
          <Text mt={2} fontSize="sm" color="gray.828282">
            or continue with these social profile
          </Text>
        </Center>

        <Center mt={6} gridGap={5}>
          <IconButton
            variant="outline"
            borderColor="gray.828282"
            aria-label="Send email"
            isRound
            icon={<Google color="gray.828282" />}
          />
          <IconButton
            variant="outline"
            borderColor="gray.828282"
            aria-label="Send email"
            isRound
            icon={<Facebook color="gray.828282" />}
          />
          <IconButton
            variant="outline"
            borderColor="gray.828282"
            aria-label="Send email"
            isRound
            icon={<Twitter color="gray.828282" />}
          />
          <IconButton
            variant="outline"
            borderColor="gray.828282"
            aria-label="Send email"
            isRound
            icon={<Github color="gray.828282" />}
          />
        </Center>
        <Center mt={6} fontSize="sm">
          <Text color="gray.828282">Already a member?</Text>
          <Link ml="1" color="blue.00E">
            Login
          </Link>
        </Center>
      </Box>
      <Flex w="100%" mt="3" fontSize="sm" color="gray.828282">
        <Box display="flex">
          <Text>created by</Text>
          <Text ml="1" textDecoration="underline" fontWeight="bold">
            adShoheiTerashima
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text>devChallenges.io</Text>
        </Box>
      </Flex>
    </Flex>
  )
}
