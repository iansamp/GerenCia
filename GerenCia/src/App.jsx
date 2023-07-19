import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/layout/Navbar/Navbar";
import Home from "./components/pages/Home";
import Estoque from "./components/pages/Estoque/Estoque";
import Form from "./components/pages/Estoque/Form";
import Lanches from "./components/pages/Lanches/Lanches";
const Content = styled.div`
  background-color: #dfe0df;
  display: flex;
`;
function App() {
  return (
    <Router>
      <Content>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/estoque" element={<Form />} />
          <Route path="/lanches" element={<Lanches />} />
        </Routes>
      </Content>
    </Router>
  );
}

export default App;
