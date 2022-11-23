import { nowrap } from "@styles/utils/nowrap";
import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Link href="/">
        <Logo>Syllab:us</Logo>
      </Link>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  height: 100px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 30px;
  font-family: "LineSeedSansBold", sans-serif;
  ${nowrap};
`;

export default Header;
