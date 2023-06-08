import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  CardFooter,
  Button,
  useMediaQuery
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Posts(props) {
  const { posts } = props;
  const [isSmallerThan1120] = useMediaQuery("(max-width: 1505px)");
  return (
    <>
     {posts.map((item) => (
       <Card
       direction={isSmallerThan1120 ? "column" : "row"}
       overflow="hidden"
       bg="transparent"
       mb="1em"
       w={{base: "100%", sm: "auto"}}
       key={item.id}
     >
       <Image
         objectFit="cover"
         maxW={ isSmallerThan1120 ? "100%" : "320px"}
         src={item.image}
         alt="imagem"
       />
       <Stack>
         <CardBody>
           <Heading>
             {item.heading}
           </Heading>
           <Text py="2">
             {item.text}
           </Text>
         </CardBody>
         <CardFooter>
           <Button variant="solid" colorScheme="blue">
             <Link>
               ver mais
             </Link>
           </Button>
         </CardFooter>
       </Stack>
     </Card>
     ))}
    </>
  );
}

export default Posts;
