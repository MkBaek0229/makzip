import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
      <Container>
        <Head>
          <Header/>
        </Head>
        <Content>
          <Sidebar />
        </Content>
        <Footer>
            지도
        </Footer>
      </Container>
  )
}

export default Home;

const Container = styled.div`
  display : flex;
  flex-direction: row;
`

const Head = styled.div`
  order: 0;
`

const Content = styled.div`
  order: 1;
  width : 30%;
`

const Footer = styled.div`
  order: 2;
  width : 100%;
`