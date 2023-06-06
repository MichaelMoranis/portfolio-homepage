import { ChakraProvider} from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import theme from "components/theme";
import InitialPage from "pages/initialPage";
import MainContent from "components/Profile";
import Works from "./components/Works";

function AppRoutes() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/initial" element={<InitialPage />} />
          <Route path="/profile" element={<MainContent />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default AppRoutes;


