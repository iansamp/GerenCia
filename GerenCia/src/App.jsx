import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/layout/Navbar/Navbar";
import Home from "./components/pages/Home";
import Estoque from "./components/pages/Estoque/Estoque";
import Form from "./components/pages/Estoque/Form";

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
          <Route path="/estoque/adicionar" element={<Form />} />
        </Routes>
      </Content>
    </Router>
  );
}

export default App;
