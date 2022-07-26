import { Container, Badge, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import Para from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="ManagedPowerPortal">
      <Container>
        <Title>
          ManagedPowerPortal <Badge>2022</Badge>
        </Title>
        <Para>
          A portal for monitoring and managing network enabled devices, allowing
          for proactive troubleshooting with automatic alarms, global health
          montoring, device registration, and more
        </Para>
        <List ml={4} mt={4}>
          <ListItem></ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>c#.Net Framework, Blazor, Entity Framework, MatBlazor</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/thumbManagedPowerPortal.png"
          alt="managedpowerportal"
        />
      </Container>
    </Layout>
  );
};

export default Work;
