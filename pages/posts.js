import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import siteIsLaunched from "../public/images/works/nextfire_01.png";
import homePageisLaunched from "../public/images/works/homepagePost.png";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="NextFire launch post"
            thumbnail={siteIsLaunched}
            href="https://nextfire-ebon.vercel.app/chasepatrick117/site-is-launched"
          ></GridItem>
          <GridItem
            title="Homepage launch post"
            thumbnail={homePageisLaunched}
            href="https://nextfire-ebon.vercel.app/chasepatrickdev/portfolio-site-has-launched"
          ></GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
