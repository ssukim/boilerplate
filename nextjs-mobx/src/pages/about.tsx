import styled from "styled-components";

export default function About() {
  return (
    <Wrapper>
      <TitleBox>Hello</TitleBox>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const TitleBox = styled.div`
    color: ${({theme})=>theme.colors.primary}
`;
