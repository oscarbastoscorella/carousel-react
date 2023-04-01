import styled from "styled-components";

export default function Header({}) {
  return (
    <Container>
      <SearchContainer>
        <Label>search</Label>
        <Input type="search" placeholder="search"></Input>
      </SearchContainer>
    </Container>
  );
}

const Container = styled.header`
  background: ${(p) => p.theme.secondary};
  width: 100%;
  height: 64px;
  flex-shrink: 0;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;
const SearchContainer = styled.section``;

const Label = styled.label``;
const Input = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 5px;
`;
