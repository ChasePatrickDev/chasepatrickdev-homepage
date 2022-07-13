import { Container, Box, Heading } from "@chakra-ui/react";
export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} align="center">
        Hello, I am a junior front end devloper!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Chase Patrick
          </Heading>
          <p>Digital Problem Solver ( Developer / Engineer / Designer )</p>
        </Box>
      </Box>
    </Container>
  );
}
