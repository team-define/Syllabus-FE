import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Divider />
      <Information>Copyright © Team Define. All rights reserved</Information>
    </Container>
  );
};

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 300px;
  padding-top: 20px;
  gap: 20px;
`;

const Divider = styled.hr`
  width: 500px;
  height: 1px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.black};
  background-color: #d1d1d1;
`;

const Information = styled.div`
  font-size: ${({ theme }) => theme["12px"]};
`;

export default Footer;
