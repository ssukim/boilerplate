import styled from 'styled-components';
import Input from '../../Atoms/Input';

type Props = {
    name: string;
    label: string;
};
export default function InputWithLabel({ name, label }: Props) {
    <>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
        <Input name={name} />
    </>;
}

const StyledLabel = styled.label`
    margin-right: 10px;
`;
