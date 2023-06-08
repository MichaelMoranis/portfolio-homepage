import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  CardFooter,
  Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Posts(props) {
  const { posts } = props;
  return (
    <>
     {posts.map((item) => (
       <Card
       direction={{ base: "column", sm: "row" }}
       overflow="hidden"
       variant="outline"
       mb="1em"
       w={{base: "100%", sm: "auto"}}
       key={item.id}
     >
       <Image
         objectFit="cover"
         maxW={{ base: "100%", sm: "320px" }}
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
