import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';

type Props = {
  label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
function Button({ label }: Props) {
  return (
    <>
      <StyledButton>{label}</StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  color: ${palette.lightBlue[50]};
  background-color: ${palette.lightBlue[900]};
  border: none;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  height: 2.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
`;

export default Button;
