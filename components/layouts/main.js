import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

export default function Main({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Chase Patrick - Homepage</title>
      </Head>
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
}
