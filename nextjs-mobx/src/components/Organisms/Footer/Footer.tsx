import styled from "styled-components";

const Footer = () => {
  return (
    <footer>
      <div>Footer</div>
    </footer>
  );
};

export default Footer;

const Wrapper = styled.div`
 @media ${props => props.theme.lg} {
    width: 100%;
    margin: 0 auto;
  }
`;
