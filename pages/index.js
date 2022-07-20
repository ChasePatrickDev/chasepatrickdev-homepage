import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import { BioSection, BioYear } from "../components/bio";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          align="center"
        >
          Hello, I am a junior software devloper!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Chase Patrick
            </Heading>
            <p>Digital Problem Solver ( Developer / Engineer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/chase.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            My name is Chase and I a Software Developer and Engineer based in
            Indianapolis with a passion for problem solving and building
            solutions.the opportunity with Kenzie Academy to build my web
            development skills as well as my current role with Circle K that
            allows me to elevate my development to full-stack with .Net
            development. My goal is to use my adaptability and problem-solving
            as a software developer and engineer. My most recent project is{" "}
            <NextLink href="/works/nextfire">
              <Link>NextFire</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in Bedford, IN
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Worked at Amazon.com as a Tier 2 Logistics Associate
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed the Associate Front-end Developement training program at
            Kenzie Academy and began further self-taught education
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Began working at Circlek (Contracted through Beacon Hill) as a
            Junior Full-Stack Software Developer
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Hired on as a full-time employee at Circlek as a Junior Full-Stack
            Software Developer
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Interests
          </Heading>
          <Paragraph>
            Software Developement, Video Games, Music, Animation, Learning about
            New Technology
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
}
