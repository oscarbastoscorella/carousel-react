import styled from "styled-components";
import Carousel from "./Carousel";
import { items } from "./items";

export default function App() {
  return (
    <AppContainer>
      <Carousel items={items} maxNumberPerPage={6} />
    </AppContainer>
  );
}

const AppContainer = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
