import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import dynamic from "next/dynamic";
import RavenLoader from "../raven-loader";

const LazyVoxelRaven = dynamic(() => import("../voxel-raven"), {
  ssr: false,
  loading: () => <RavenLoader />,
});

export default function Main({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Chase's Homepage" />
        <meta name="author" content="Chase Patrick" />
        <meta name="author" content="ChasePatrickDev" />
        {/* <link rel="apple-touch-icon" href="apple-touch-icon.png" /> */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Chase Patrick" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chasepatrickdev" />
        <meta name="twitter:creator" content="@chasepatrickdev" />
        <meta
          name="twitter:image"
          content="https://chasepatrickdev-homepage.vercel.app/card.png"
        />
        <meta property="og:site_name" content="Chase Patrick" />
        <meta name="og:title" content="Chase Patrick" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://chasepatrickdev-homepage.vercel.app/card.png"
        />

        <title>Chase Patrick - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <LazyVoxelRaven />
        {children}
      </Container>
    </Box>
  );
}
