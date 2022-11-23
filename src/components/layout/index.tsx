import styled from "styled-components";
import Header from "@components/layout/header";
import Footer from "@components/layout/footer";

interface LayoutPropsType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <>
      <Header />
      <Main>
        <Content>{children}</Content>
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 700px;
  min-height: 500px;
  height: auto;
`;

export default Layout;
