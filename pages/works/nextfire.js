import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Para from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="NextFire">
      <Container>
        <Title>
          NextFire <Badge>2022</Badge>
        </Title>
        <Para>
          A personal blogging site that allows Google Authentication, Markdown
          post editing, image upload, post interaction, and more!
        </Para>
        <List ml={4} mt={4}>
          <ListItem>
            <Meta>Live Demo</Meta>
            <Link href="https://nextfire-ebon.vercel.app/">
              https://nextfire-ebon.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem></ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Node.js, Next.js, Firebase, Custom CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Blog Post</Meta>
            <Link href="https://nextfire-ebon.vercel.app/chasepatrick117/site-is-launched">
              Site is Launched!!! <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/nextfire_01.png" alt="nextfire" />
        <WorkImage src="/images/works/nextfire_02.png" alt="nextfire" />
      </Container>
    </Layout>
  );
};

export default Work;
