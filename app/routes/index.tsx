import { Button } from "~/components/button";
import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 80px auto 80px;
    grid-template-columns: 200px auto 1fr;
    grid-template-areas: 'nav nav nav'
                         'asaid main main'
                         'foot foot foot';
`

const Header = styled.header`
    background-color: green;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .16);    
    grid-area: nav;
`

const Aside = styled.aside`
  background-color: #213e48;
  grid-area: asaid;
`

const Main = styled.main`
  background-color: yellow;
  grid-area: main;
`

export default function Index()
{
  return (
    <Container>
      <Header></Header>
      <Aside></Aside>
      <Main>
        <Button>Hello World</Button>
      </Main>
    </Container>
  );
}
