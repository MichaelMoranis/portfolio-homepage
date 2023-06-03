import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";

function AppRoutes() {
  return (
      <BrowserRouter>
        <ChakraProvider>
          <Header />
        </ChakraProvider>
      </BrowserRouter>
  );
}

function App() {
 return (
   <ChakraProvider>
       <AppRoutes />
   </ChakraProvider>
 );
}

export default App;
