import styled from "styled-components";
import React from "react";

type Props = {
  label: string;
};
export default function Button({ label }: Props) {
  return (
    <>
      <StyledButton>{label}</StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.primary};
`;
