import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type Props = {
    name: string;
} & InputHTMLAttributes<HTMLInputElement>;
export default function Input({ name, ...rest }: Props) {
    return (
        <>
            <StyledInput id={name} {...rest} />
        </>
    );
}

const StyledInput = styled.input``;
