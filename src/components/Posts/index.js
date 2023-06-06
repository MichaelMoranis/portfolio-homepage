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
         maxW={{ base: "100%", sm: "200px" }}
         src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
         alt="Caffe Latte"
       />
       <Stack>
         <CardBody>
           <Heading>
             {item.text}
           </Heading>
           <Text py="2">
             Desenvolvido por MichaelMoranis
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
