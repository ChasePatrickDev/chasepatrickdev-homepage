import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Para from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="HomePage">
      <Container>
        <Title>
          ChasePatrickDev-Homepage <Badge>2022</Badge>
        </Title>
        <Para>
          The site you are on right now! This is a portfolio site that I built
          to showcase my skills and previous works as a developer. This came
          with a lot of extra challenges I was not expecting, like learning how
          to model and render a 3d voxel art raven, but I could not be happier
          with how much progress I have made from working on these projects.
        </Para>
        <List ml={4} mt={4}>
          <ListItem>
            <Meta>Live Demo</Meta>
            <Link href="/">
              https://chasepatrickdev-homepage.vercel.app/{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem></ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Three.js, Chakra UI, Framer Motion</span>
          </ListItem>
          <ListItem>
            <Meta>Blog Post</Meta>
            <Link href="https://nextfire-ebon.vercel.app/chasepatrickdev/portfolio-site-has-launched">
              Portfolio Homepage is launched! <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/homepage_01.png" alt="nextfire" />
        <WorkImage src="/images/works/homepage_02.png" alt="nextfire" />
      </Container>
    </Layout>
  );
};

export default Work;
