import { Box, Button, Center, Flex, IconButton, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { Facebook, Github, Google, Lock, Logo, Mail, Twitter } from '@components/icons'
import { css } from '@emotion/react'
const input = css({
  paddingLeft: '2.5rem',
})
export const Login = () => {
  return (
    <Center h="100vh" color="black">
      <Flex direction="column">
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
          <Logo width="131px" height="19px" className="fill-white" />
          <Text>Join thousands of learners from around the world</Text>
          <Text>Master web development by making real-life projects. There are multiple paths for you to choose</Text>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Mail width="20px" height="20px" color={'red.500'} />
            </InputLeftElement>
            <Input type="tel" placeholder="Email" css={input} />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Lock width="20px" height="20px" className="fill-white" />
            </InputLeftElement>
            <Input type="tel" placeholder="Password" css={input} />
          </InputGroup>
          <Button colorScheme="blue">Start coding now</Button>
          <Text>or continue with these social profile</Text>
          <IconButton
            variant="outline"
            colorScheme="teal"
            aria-label="Send email"
            isRound
            icon={<Google color="red.500" />}
          />
          <IconButton
            variant="outline"
            colorScheme="teal"
            aria-label="Send email"
            isRound
            icon={<Facebook color="red.500" />}
          />
          <IconButton
            variant="outline"
            colorScheme="teal"
            aria-label="Send email"
            isRound
            icon={<Twitter color="red.500" />}
          />
          <IconButton
            variant="outline"
            colorScheme="teal"
            aria-label="Send email"
            isRound
            icon={<Github color="red.500" />}
          />
          <Text>
            Adready a member? <a>Login</a>
          </Text>
        </Box>
        <Flex color="black">
          <Text>created by adShoheiTerashima</Text>
          <Text>devChallenges.io</Text>
        </Flex>
      </Flex>
    </Center>
  )
}
