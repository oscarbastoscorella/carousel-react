import styled from "styled-components";

export default function Sidebar({}) {
  return (
    <Container>
      <LogoContainer>
        <Image src="./icons/logo-spotify.svg" alt="icon of Spotify"></Image>
      </LogoContainer>
      <NavigationContainer>
        <Linkcontainer href="/">
          <Icons src="./icons/home.svg" alt="icon of a home"></Icons>
          <TextLink>Home</TextLink>
        </Linkcontainer>
        <Linkcontainer href="/">
          <Icons src="./icons/search.svg" alt="icon of search"></Icons>
          <TextLink>Search</TextLink>
        </Linkcontainer>
        <Linkcontainer href="/">
          <Icons
            src="./icons/library.svg"
            alt="icon of books that represent a library"
          ></Icons>
          <TextLink>Your Library</TextLink>
        </Linkcontainer>
        <Linkcontainer href="/">
          <Icons
            src="./icons/add.svg"
            alt="icon of plus, where you can create your playlists"
          ></Icons>
          <TextLink>Create Playlists</TextLink>
        </Linkcontainer>
        <Linkcontainer href="/">
          <Icons
            src="./icons/liked.svg"
            alt="heart symbol that means, that you like the song"
          ></Icons>
          <TextLink>Liked Songs</TextLink>
        </Linkcontainer>
      </NavigationContainer>
    </Container>
  );
}
const Container = styled.aside`
  background: ${(p) => p.theme.sidebar};
  width: 240px;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 10px 25px;
  gap: 30px;
`;

const NavigationContainer = styled.nav`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  cursor: pointer;
`;
const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const Image = styled.img`
  height: 40px;
`;

const Icons = styled.img`
  height: 24px;
`;
const Linkcontainer = styled.a`
  display: flex;
  gap: 15px;
  text-decoration: none;
  align-items: center;
`;

const TextLink = styled.span`
  color: white;
  font-size: 0.875rem;
  font-weight: bold;
`;
