import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { Title, Meta } from "../../components/work";
import Para from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Lumier">
            <Container>
                <Title>
                    Lumier <Badge>2025*</Badge>
                </Title>
                <Para>
                    A stock trading agent that will take strategies configured and run them on a live stock market.
                </Para>
                <List ml={4} mt={4}>
                    <ListItem>
                        <Meta>Live Demo</Meta>
                        <Link>
                            Work In Progress
                        </Link>
                    </ListItem>
                    <ListItem></ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, PostgreSQL, Redis</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Work;
