import {
  Container,
  //Box,
  Heading,
  SimpleGrid,
  //Divider
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";

import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbNextfire from "../public/images/works/thumbNextfire.png";
import thumbManagedPowerPortal from "../public/images/works/thumbManagedpowerportal.png";

export default function Works() {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {/* to add additional examples use format below including Section component */}
          <Section>
            <WorkGridItem
              id="nextfire"
              title="NextFire"
              thumbnail={thumbNextfire}
            >
              A personal blogging site that allows Google Authentication,
              Markdown post editing, image upload, and more
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="managedpowerportal"
              title="ManagedPowerPortal"
              thumbnail={thumbManagedPowerPortal}
            >
              A portal for monitoring and managing network enabled devices,
              allowing for proactive troubleshooting with automatic alarms,
              global health montoring, device registration, and more
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
