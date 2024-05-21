import styled from "styled-components";
import React, { useRef } from "react";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Hero from "./components/Hero";
import PortfolioHome from "./components/PortfolioHome";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Who from "./components/Who";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  const worksRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Container>
      <Hero
        worksRef={worksRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />

      <div ref={worksRef}>
        <Works />
      </div>

      <div ref={portfolioRef}>
        <PortfolioHome />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      {/* 
       <div ref={whoRef}>
        <Who /> 
      </div> */}
      {/* <Portfolio /> */}
    </Container>
  );
}

// function App() {
//   return (
//     <Container>
//       <Hero />
//       <Who />
//       <Works />
//       <Contact />
//     </Container>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Container>
//         <Routes>
//           <Route path="/contact" element={<Contact />} />
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <Who />
//                 <Works />
//               </>
//             }
//           />
//         </Routes>
//       </Container>
//     </BrowserRouter>
//   );
// }

export default App;
