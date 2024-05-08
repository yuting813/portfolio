import styled from "styled-components";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useRef } from "react";
import Contact from "./components/Contact";
import Who from "./components/Who";
import Works from "./components/Works";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

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
  const contactRef = useRef(null);
  const whoRef = useRef(null);
  const worksRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWho = () => {
    whoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWorks = () => {
    worksRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Hero
        scrollToContact={scrollToContact}
        scrollToWho={scrollToWho}
        scrollToWorks={scrollToWorks}
      />
      {/* <div ref={whoRef}>
        <Who /> */}
      {/* </div> */}
      <div ref={worksRef}>
        <Works />
      </div>
      <Portfolio />
      <div ref={contactRef}>
        <Contact />
      </div>
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
