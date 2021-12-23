import styled from 'styled-components';
import React from 'react';

const StyledButton = styled.button`
    color: ${({ theme }) => theme.colors.primary};
`;

type Props = {
    label: string;
} & React.ComponentPropsWithoutRef<'button'>;
export default function Button({ label, ...rest }: Props) {
    return (
        <>
            <StyledButton {...rest}>{label}</StyledButton>
        </>
    );
}
