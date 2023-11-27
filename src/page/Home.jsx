import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "./sidebar";

function Home() {
  return (
      <Container>
        <Header/>
        <Sidebar />
        지도
      </Container>
  )
}

export default Home;

const Container = styled.div`

`